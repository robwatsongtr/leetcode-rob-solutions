// LC 242 Is Anagram

// Anagram: Same Characters, Same frequency.


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