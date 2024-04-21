import exampleDocs from "./exampleDocs.mjs"
import optOutCategories from "./optOutCategories.mjs"

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

const updateExampleDocs = (arrOfDocs) => {
  let newArrayOfDocs = []

  for (let doc of arrOfDocs) {
    const rssCategories = doc.categories.map(category => category.name)
    console.log(`RSS category names for doc:[ ${rssCategories} ]`)

    const matchingCategories = matchCategories(rssCategories, optOutCategories)
    console.log(`Matching opt-out categories: ${matchingCategories}`)

    console.log("\n")
  }

}

console.log( updateExampleDocs(exampleDocs) )