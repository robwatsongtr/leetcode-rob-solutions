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

  // edge cases
  if( s1.length > s2.length || s2.length === 0 ) return false; 
  if( s1.length === 0 ) return true; 

  let s1map = new Array(26);
  let s2map = new Array(26);

  let s1len = s1.length; 
  let s2len = s2.length; 

  // generate the hash map for the first window in s2
  for( let i = 0; i < s1len; i++ ) { 
    s1map[s1.charCodeAt(i) - 97]++;
    s2map[s2.charCodeAt(i) - 97]++;  
  }

  for( let i = s1len; i < s2len; i++ ) {
    if( matches(s1map, s2map) ) return true;
    s2map[s2.charCodeAt(i - s1len) - 97]--; // subtract left side of window
    s2map[s2.charCodeAt(i) - 97]++; // add one to right side of window 
  }

  return matches(s1map, s2map)
   
};


console.log( checkInclusion( 'ab', 'eidbaooo') );