/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2

Robert's clever solution: encode the letters of the albphabet as

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/
  
var checkInclusion = (s1, s2) => {
  
  // edge cases
  if( s1.length > s2.length || s2.length === 0 ) return false; 
  if( s1.length === 0 ) return true; 

  let s1map = BigInt(0);
  let s2map = BigInt(0);
  let a = 'a'.charCodeAt(0)

  let s1len = s1.length; 
  let s2len = s2.length;
  
  let s1Power = BigInt(s1len + 1)

  // generate the hash map for the first window in s2
  for( let i = 0; i < s1len; i++ ) {
    s1code = s1.charCodeAt(i) - a;
    s1map += s1Power ** BigInt(s1code)
    s2code = s2.charCodeAt(i) - a
    s2map += s1Power ** BigInt(s2code)
  }
  console.log(s1map, s2map)

  for( let i = s1len; i < s2len; i++ ) {
    if( s1map ===  s2map ) return true;
    s2map -= s1Power ** BigInt(s2.charCodeAt(i - s1len) - a); // subtract left side of window
    s2map += s1Power ** BigInt(s2.charCodeAt(i) - a); // add one to right side of window 
    //console.log(s2map)
  }

  return s1map === s2map
   
};

console.log( checkInclusion( 'ab', 'eidbaoo') );