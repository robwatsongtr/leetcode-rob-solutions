/*
LC 290 Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection 
between a letter in pattern and a non-empty word in s.

*/

const wordPattern = (pattern, s) => {
  let hashmap = {}
  let words = s.split(' ')

  if( words.length !== pattern.length ) return false

  for( let i = 0; i < words.length; i++) {
    let char = pattern[i]
    let word = words[i]

    if( char in hashmap ) {
      if( hashmap[char] !== word ) {
        return false 
      }
    } else {
      let valuesArray = Object.values(hashmap)
      if( valuesArray.includes(word) ) {
        return false 
      }
    }

    hashmap[char] = word
  }

  return true 
}

console.log( wordPattern('abba', 'dog cat cat dog') )


