/*

LC 290 Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection 
between a letter in pattern and a non-empty word in s.

create a hashmap to map each character in the pattern to an individual word



*/

const wordPattern = (pattern, s) => {

  let hashmap = new Map(); 
  let words = s.split(' ');

  if( words.length !== pattern.length  ) return false; 

  console.log(words)
  console.log(pattern)
  console.log(words.length);

  for ( let i = 0; i < words.length; i++ ) {
    
    let c = pattern.charAt(i);
    
    if( hashmap.has(c) ) {

      if( !(hashmap.get(c) === words(i)) ) {
        return false; 
      }

    } else {

      // if( hashmap )

    }



    hashmap.set(c, words[i]);
    
  }
  
  

  console.log( hashmap );
  
}

console.log( wordPattern('abcd', 'dog cat cat dog') )




// // create a hashmap to map each character in the pattern to an individual word
  