import mongoose from 'mongoose'
import Media from '../models/Media.js'
import PQueue from 'p-queue'

let queue = new PQueue({ concurrency: 30 })

const optOutCategories = [
  'Arts and Culture', 'Business and Economics', 'Climate', 'Criminal Justice',
  'Education', 'Extremism', 'Geopolitics', 'Health', 'Immigration', 
  'Labor Organizing', 'LGBTQ+', 'Media', 'Racial Justice', 'Science',
  'Sports', 'Tech', 'U.S. Politics', "Women's Rights", 'Money in Politics'
]

const matchCategoriesFaster = (rssCategories, optOutCategories) => {
  const matches = []
  const optoutCategoriesMap = new Map()
  const rssCategoriesMap = new Map()

  for (const cat of optOutCategories) {
    // store the lowercase category and the properly capitalized category 
    optoutCategoriesMap.set(cat.toLowerCase(), cat)
  }
  for (const cat of rssCategories) {
    rssCategoriesMap.set(cat.toLowerCase(), true )
  }

  for (const key of optoutCategoriesMap.keys()) {
    if ( rssCategoriesMap.has(key) ) {
      // put the properly capitalized category into the matches arr 
      matches.push(optoutCategoriesMap.get(key))
    }
  } 

  return matches
}

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
    console.log(`updating document id ${id} with categories ${JSON.stringify(matchedCategoriesArr)}`)
    return Media.findOneAndUpdate(filter, update, { rawResult: true })
  } catch(err) {
    console.log(`${err} saving document id${id}`)
    return Promise.resolve()
  }
}

const main = async () => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const media = await Media.find({
      $and: [
        { publicationDateISO: { $gte: oneWeekAgo } },
        { customCategories: { $eq: [] } }
      ] 
    })
    const matchAndSaveOptOutCategories = media.map(
      async doc => {
        const rssCategories = doc.categories.map(category => category.name)
        const matchingCategories = matchCategories(rssCategories, optOutCategories)
        const deDupedMatchingCats = [...new Set(matchingCategories)]
        const matchedCategoriesArrObjs = deDupedMatchingCats.map(str => { return { name: str } })
        return queue.add ( () => saveToDb( doc?.id, matchedCategoriesArrObjs ))
      }
    )
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
