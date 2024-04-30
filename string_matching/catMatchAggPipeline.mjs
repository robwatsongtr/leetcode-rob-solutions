import optOutCategories from './optOutCategories.mjs'

const regexSearchTerms = optOutCategories.map(term => new RegExp(`\\b${term}\\b`, 'i'))
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

const categoriesMatchAggPipeline = [
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
			categories: { $push: '$categories'},
			document: { $first: '$$ROOT' }, // Preserve the entire document
		}
	},
	{
		$replaceRoot: {
				newRoot: {
						$mergeObjects: ['$document', { categories: '$categories' }] // Merge the document with categories
				}
		}
	}
]

export default categoriesMatchAggPipeline