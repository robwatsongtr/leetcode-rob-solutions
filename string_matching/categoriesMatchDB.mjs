import mongoose from 'mongoose'
import Media from '../../models/Media.js'
import PQueue from 'p-queue'

let queue = new PQueue({ concurrency: 30 })

const optOutCategories = [
  'Arts and Culture', 'Business and Economics', 'Climate', 'Criminal Justice',
  'Education', 'Extremism', 'Geopolitics', 'Health', 'Immigration', 
  'Labor Organizing', 'LGBTQ+', 'Media', 'Racial Justice', 'Science',
  'Sports', 'Tech', 'U.S. Politics', "Women's Rights", 'Money in Politics'
]

const matchCategories = (rssCategories, optOutCategories) => {
  try {
    const matches = []
    rssCategories.forEach(rssCat => {
      optOutCategories.forEach(optOutCat => {
        const lowerCaseRssCat = rssCat.toLowerCase()
        const lowerCaseOptOutCat = optOutCat.toLowerCase()
        if (lowerCaseRssCat.includes(lowerCaseOptOutCat)) {
          matches.push(optOutCat)
        }
      })
    })
    return matches 
  } catch (err) {
    console.log(`Error matching catetgores : ${err}`)
  }
}

const saveToDb = async (id, matchedCategoriesArr) => {
  if( !id || !matchedCategoriesArr ) return Promise.resolve()
  try {
    const update = { customCategories: matchedCategoriesArr }
    const filter = { _id: id }
    console.log(`updating document id ${id} with categories ${matchedCategoriesArr}`)
    return Media.findOneAndUpdate(filter, update, { rawResult: true })
  } catch(err) {
    console.log(`${err} saving document id${id}`)
    return Promise.resolve()
  }
}

const main = async () => {
  try {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
    const media = await Media.find({
      $and: [
        { publicationDateISO: { $gte: twoWeeksAgo } },
        { customCategories: { $eq: [] } }
      ] 
    })
    const matchAndSaveOptOutCategories = media.map(
      async doc => {
        const rssCategories = doc.categories.map(category => category.name)
        const matchingCategories = matchCategories(rssCategories, optOutCategories)
        const matchedCategoriesArr = matchingCategories.map(str => { return { name: str } })
        return queue.add ( () => saveToDb( doc?.id, matchedCategoriesArr ))
      }
    )
    console.log("created all promises")
    return Promise.all(matchAndSaveOptOutCategories)
  } catch(err) {
    console.log(`Overall script error: ${err}`)
  }
}
 
mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/optout')
  .catch( err => console.log(err) )
const connection = mongoose.connection

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  main().then( () => {
    console.log("Finished processing documents.")
  }).catch(e => {
    console.error(`failed to process media items: ${e}`)
  }).finally(() => {
    connection.close()
  })
})
