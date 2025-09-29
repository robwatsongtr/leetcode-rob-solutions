// LC 2085 Count Common Words With One Occurrence

/*
Given two string arrays words1 and words2, return the number of strings 
that appear exactly once in each of the two arrays.

*/


var countWords = function(words1, words2) {
  const words1map = {}
  const words2map = {}
  let count = 0

  for (let words of words1) {
    words1map[words] = (words1map[words] || 0) + 1
  }

  for (let words of words2) {
    words2map[words] = (words2map[words] || 0) + 1
  }

  for (let key in words1map) {
    if( key in words2map && words1map[key] === 1 && words2map[key] === 1) {
      count++
    }
  }

  return count 

};

console.log( countWords(["leetcode","is","amazing","as","is"],["amazing","leetcode","is"]) )