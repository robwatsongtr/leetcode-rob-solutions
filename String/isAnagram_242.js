/** Valid Anagram LC 242
 * 
 * Given two strings s and t, return true if t is an anagram of s, 
 * and false otherwise.
 * 
 * An anagram is a word or phrase formed by rearrangig the letters
 * of an existing word or phrase, using each original letter exactly once. 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(s.length != t.length) return false;
  
  let sCount = {};
  let tCount = {};
  
  // make frequency counter hash maps for both strings 
  for( let val of s ) { 
    sCount[val] = ( sCount[val] || 0 ) + 1; 
  } 
  for( let val of t ) { 
    tCount[val] = ( tCount[val] || 0 ) + 1; 
  }
  
  for( let key in sCount) {
      // checks for all same characters
      if( !(key in tCount) ) return false; 
      // checks for frequency 
      if( tCount[key] !== sCount[key] ) return false; 
  }

  // its a valid anagram 
  return true; 
};


console.log( isAnagram('qwerty', 'qeywrt') ); // true 
console.log( isAnagram('aabbccdd', 'ddccaabb') ); // true
console.log( isAnagram('aabbccdd', 'ddccaabbb') ); // false