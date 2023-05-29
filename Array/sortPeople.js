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


*/

var sortPeople = function(names, heights) {

  // Make a map with the key as the height (since height is guaranteed 
  // to be distinct) and a value of name, (not guaranteed to be distinct)
  let peopleMap = {}
  for( let i = 0; i < heights.length; i++ ) {
    peopleMap[heights[i]] = names[i] 
  }

  // convert object to array of key value pairs 
  const arrayOfKeyValuePairs = Object.entries(peopleMap)

  // sort by key, coercing the keys to ints for sorting 
  const sortedArrayKeyValuePairs = arrayOfKeyValuePairs.sort(
    ([keyA], [keyB]) => parseInt(keyB) - parseInt(keyA)
  )
  
  // return just the names in the array of key value pairs 
  const returnedNames = sortedArrayKeyValuePairs.map(pair => pair[1])

  return returnedNames

};

console.log( sortPeople(['Alice', 'Bob', 'Bob'],[155,185,150] ) )