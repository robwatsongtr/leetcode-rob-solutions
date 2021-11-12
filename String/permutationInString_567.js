/*

Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2

Approach - use an array to count char frequencies and a sliding window.

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/

var checkInclusion = (s1, s2) => {

  // edge case, s1 cant contain a permutation of s2 if its longer than s2. 
  if( s1.length > s2.length ) return false; 

  let freqCharArr1 = new Array(26);
  let freqCharArr2 = new Array(26);

  // 1. loop through s1 and get an array of frequency of chars of alphabet
  for( char of s1 ) {

  }

  // 2. loop through s2 and get an array of frequencies of chars of alphabet
  for( char of s2 ) {

  }

  // 3. sliding window compare the arrays against each other 



    
};