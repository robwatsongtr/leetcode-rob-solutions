/* 
LC 2418 

Sort the People

You are given an array of strings names, and an array heights that 
consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Approach:

Create a hash table that associates the name with the height
Sort the hash table by height in descending order 

Return the keys (names) in descending order

BELOW DOES NOT WORK IF YOU HAVE DUPLICATE NAMES

actual probable answer: use two dimensional array (matrix)

*/

var sortPeople = function(names, heights) {
  let peopleMap = {}
  for( let i = 0; i < names.length; i++ ) {
    peopleMap[names[i]] = heights[i] 
  }

  console.log(peopleMap)

  // return the just the keys, sorted 
  const sorted = Object.keys(peopleMap).sort( (a, b) => {
    return peopleMap[b] - peopleMap[a]
  })

  return sorted

};

console.log( sortPeople(["Mary","John","Emma"],[180,165,170] ) )