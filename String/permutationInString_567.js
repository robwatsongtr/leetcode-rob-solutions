/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2

SLIDING HASH MAP WINDOW 

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/

const matches = (map1, map2) => {

  for( let i = 0; i < 26; i++) {

    if( map1[i] != map2[i] ) {
      return false;
    }

  }

  return true; 
}


var checkInclusion = (s1, s2) => {

  // edge case, s1 cant contain a permutation of s2 if its longer than s2. 
  if( s1.length > s2.length ) return false; 

  let freqCharArr1 = new Array(26);
  let freqCharArr2 = new Array(26);


  for( let i = 0; i < s1.length; i++ ) { 

    freqCharArr1[s1.charCodeAt(0) - 97]++;
    freqCharArr2[s2.charCodeAt(0) - 97]++;  

  }

  

  

  
  
   
    
};


console.log( checkInclusion( 'ab', 'eidbaooo') );