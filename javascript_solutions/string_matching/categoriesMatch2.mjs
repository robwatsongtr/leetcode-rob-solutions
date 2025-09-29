import mongoose from 'mongoose'
import Media from '../models/Media.js'
import PQueue from 'p-queue'
import categoriesMatchAggPipeline from './catMatchAggPipeline.mjs'
import optOutCategories from './optOutCategories.mjs'

let queue = new PQueue({ concurrency: 30 })



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
    const filteredMedia = await Media.aggregate(categoriesMatchAggPipeline) 
    //console.log(`filtered Media: ${JSON.stringify(filteredMedia, null, 2)}`)
    const saveOptOutCategories = filteredMedia.map(
      async doc => {
        const rssCategories = doc.categories.map(category => category.name)
        const optOutedCategories = []
				rssCategories.forEach(category => {
					if (optOutCategories.includes(category)) {
						optOutedCategories.push(category)
					}
				})
        const deDupedMatchingCats = [...new Set(optOutedCategories)]
        const matchedCategoriesArrObjs = deDupedMatchingCats.map(str => { return { name: str } })
        return queue.add (() => saveToDb( doc?.id, matchedCategoriesArrObjs ))
      }
    )
    return Promise.all(saveOptOutCategories)
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
