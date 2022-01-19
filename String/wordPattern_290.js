/*

LC 290 Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection 
between a letter in pattern and a non-empty word in s.

create a hashmap to map each character in the pattern to an individual word



*/

const wordPattern = (pattern, s) => {

  let words = s.split(' ');

  if( words.length !== pattern.length  ) return false; 

  return true 

}

console.log( wordPattern('aba', 'dog cat cat dog') )