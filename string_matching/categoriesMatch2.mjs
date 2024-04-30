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
    const regexSearchTerms = optOutCategories.map(term => new RegExp(`\\b${term}\\b`, 'i'))
		// group operation undoes the unwind 
    const filteredMedia = await Media.aggregate([
			{
        $match: {
            publicationDateISO: { $gte: oneWeekAgo },
            customCategories: { $eq: [] }
        }
    	},
			{
				$unwind: '$categories'
			},
			{
				$match: {
					'categories.name': { $in: regexSearchTerms}
				}
			},
			{
				$group: {
					_id: '$_id',
					categories: { $push: '$categories'}
				}
			}
    ]) 

    console.log(`filtered Media: ${JSON.stringify(filteredMedia)}`)

    // const saveOptOutCategories = filteredMedia.map(
    //   async doc => {
    //     const rssCategories = doc.categories.map(category => category.name)
    //     const optOutedCategories = {

		// 		}
    //     const deDupedMatchingCats = [...new Set(optOutedCategories)]
    //     const matchedCategoriesArrObjs = deDupedMatchingCats.map(str => { return { name: str } })
    //     return queue.add (() => saveToDb( doc?.id, matchedCategoriesArrObjs ))
    //   }
    // )
    // return Promise.all(saveOptOutCategories)
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
