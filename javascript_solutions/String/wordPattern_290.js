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

    if( char in hashmap ) {
      // if key(char) is present and value (current word) 
      // is not the same return false 
      if( hashmap[char] !== words[i] ) {
        return false 
      }
    } else {
      // key(char) is not present but current word is present
      // so it's associated with another key so return false m
      let valuesArray = Object.values(hashmap)
      if( valuesArray.includes(words[i]) ) {
        return false 
      }
    }

    // update the hashmap for current char and word 
    hashmap[char] = words[i]
    console.log(hashmap)
    
  }

  return true 
}

console.log( wordPattern('abba', 'dog cat cat dog') )



// ----- Using MAP: 


// for some reason JS doesn't have a method to find the existence of a value
// in a map, or at least I can't find one, so here's the work-around
const valueInMap = (map, value) =>{
  const values = [...map.values()];
  if( values.includes(value) ) {
    return true;
  }
  return false; 
}


const wordPattern2 = (pattern, s) => {

  let hashmap = new Map(); 
  let words = s.split(' ');

  if( words.length !== pattern.length  ) return false; 

  for ( let i = 0; i < words.length; i++ ) {
    
    let c = pattern.charAt(i);
    
    if( hashmap.has(c) ) {

      // if the key is already present and corresponding value is not the same 
      // as the current word, return false 
      if( !(hashmap.get(c) === words[i]) ) {
        return false; 
      }

    } else {

      // if the key is not present already but the value is present, it means
      // that value is associated with some other key, so false 
      if( valueInMap(hashmap, words[i]) ) {
        return false; 
      }
  
    }

    hashmap.set(c, words[i]);
    console.log(hashmap);
  }
  
  return true
   
}

console.log( wordPattern2('abba', 'dog cat cat dog') )




