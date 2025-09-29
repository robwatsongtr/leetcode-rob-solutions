/*
LC 1528. Shuffle String

You are given a string s and an integer array indices of the same length. 
The string s will be shuffled such that the character at the ith position 
moves to indices[i] in the shuffled string.

Return the shuffled string.

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.


*/

var restoreString = function(s, indices) {
  if( s.length !== indices.length ) return false  

  // make empty array of the proper length 
  let result = new Array(indices.length) 

  // must loop over indicies array, not string array 
  for( let i = 0; i < indices.length; i++) {
    // assign each character in the original string to the proper 
    // place in result array 
    result[indices[i]] = s[i]
  }
  
  return result.join('') 
};


console.log( restoreString('codeleet',[4,5,6,7,0,3,1,2] ))