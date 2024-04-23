import mongoose from 'mongoose'
import Media from '../../models/Media.js'
import PQueue from 'p-queue'

let queue = new PQueue({ concurrency: 40 })

const matchCategories = (rssCategories, optOutCategories) => {
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
}

const main = async () => {
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)

  const media = await Media.find({
    $and: [
      { publicationDateISO: { $gte: twoWeeksAgo } },
      { customCategories: { $eq: [] } }
    ] 
  })




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
