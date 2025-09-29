/*
884. Uncommon Words from Two Sentences

A sentence is a string of single-space separated words where each word consists 
only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, 
and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. 
You may return the answer in any order.


*/

var uncommonFromSentences = function(s1, s2) {
  const arrayS1 = s1.split(' ')
  const arrayS2 = s2.split(' ')
  const result = []
  
  let mapS1 = {}
  let mapS2 = {}

  for( let word of arrayS1 ) {
    mapS1[word] = ( mapS1[word] || 0) + 1
  }

  for( let word of arrayS2 ) {
    mapS2[word] = ( mapS2[word] || 0) + 1
  }
  
  for ( let key in mapS1) {
    if( !(key in mapS2) && mapS1[key] === 1) {
      result.push(key)
    }
  }

  for ( let key in mapS2) {
    if( !(key in mapS1) && mapS2[key] === 1) {
      result.push(key)
    }
  }
  
  return result 

};

console.log( uncommonFromSentences("this apple is sweet", "this apple is sour"))
