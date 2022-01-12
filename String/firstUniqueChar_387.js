// Leetcode 387
// First Unique Character in String

/*

Given a string s, find the first non-repeating character in it 
and return its index. If it does not exist, return -1.

*/


var firstUniqueChar = function(s) {

  let hashmap = {};

  // turn string input into an array in order to later get index of 
  // non repeating char
  let charArray = s.split('');  
  
  // make hash map of frequency of characters 
  for( let val of s ) {
    hashmap[val] = (hashmap[val] || 0) + 1;
  }
  
  // loop through hash map of string input to find non repeating character
  // then search into the char array to return the index 
  for( let key in hashmap )  {
    if( hashmap[key] === 1 ) {
      return charArray.indexOf(key);  
    }
  }
  
  return -1; 
  
};


// more concise JS solution using actual map, from LC 

const firstUniqueCharLC = (inputStr) => {

  let str = new Map();

  for (let i = 0; i < inputStr.length; i++) {
    // key is character, value is this computation for how many of those chars 
    str.set( inputStr[i], (str.get(inputStr[i]) || 0) + 1 );
  }

  console.log(str);

  // actually iterates over input string to find the index of the one that has one instance
  for (let i = 0; i < inputStr.length; i++) {
    if( str.get(inputStr[i]) === 1 )
      return i;
  }

  return -1;
};



console.log( firstUniqueChar('leetcode') );
console.log( firstUniqueCharLC('leetcode') );

console.log( firstUniqueChar('dddccdbba') );
console.log( firstUniqueCharLC('dddccdbba') );

console.log( firstUniqueChar('loveleetcode') );
console.log( firstUniqueCharLC('loveleetcode') );

console.log( firstUniqueChar('aabb') );
console.log( firstUniqueCharLC('aabb') );