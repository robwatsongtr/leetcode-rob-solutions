import exampleDocs from "./exampleDocs"
import optOutCategories from "./optOutCategories"

const matchCategories = (rssCategories, optOutCategories) => {
  
}

const updateExampleDocs = (arrOfDocs) => {
  let newArrayOfDocs = []

  for (let doc of arrOfDocs) {
    const rssCategoryNames = doc.categories.map(category => category.name)
    console.log(`RSS category names for doc: ${rssCategoryNames}`)



  }

}