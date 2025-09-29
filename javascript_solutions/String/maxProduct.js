/* LC 318 Maximum Product of Word Lengths 

Given a string array words, return the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. If no such two words exist, return 0.

Example 1:

Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".

Example 2:

Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".

Example 3:

Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.

Pattern: Probably use a hashmap to figure out 

*/



/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  // get distinct letters for every word 
  const letters = words.map( word => [...new Set(word)] )

  let result = 0

  // i begins with first word
  for( let i = 0; i < words.length - 1; i++ ) {

    // j is always the word after i 
    for( let j = i + 1; j < words.length; j++) {

      // if any letter in letters[j](words[j]) is found in letters[i](words[i]), 
      // then two words share common letters. 'Some' tests whether at least one element
      // in the array passes the test implemented by the provided function 
      if ( !letters[i].some( item => letters[j].includes(item) ) ) {

        // if they don't share common letters get the length product
        let prod = words[i].length * words[j].length

        // keep updating the result with the bigger product 
        if (prod > result) result = prod
        
      }

    }
  } 

  return result  
};

console.log( maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))