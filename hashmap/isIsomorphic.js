/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced 
to get t.

All occurrences of a character must be replaced with another character 
while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 
Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true


*/

var isIsomorphic = function(s, t) {
  if( s.length !== t.length ) return false

  let sMap = {}
  let tMap = {}
  
  for( let i = 0; i < s.length; i++ ) {
    let charS = s[i]
    let charT = t[i]

    // if the current character in s isn't in its map, put it in and map it to the character in t 
    // with the same index
    //
    // if the current characer is in the map and its mapped to a different character, return false 
    if( !(charS in sMap) ) {
      sMap[charS] = charT
    } else if( sMap[charS] !== charT ) {
      return false 
    }

    // same as above but check mapping from t to s 
    if( !(charT in tMap) ) {
      tMap[charT] = charS
    } else if( tMap[charT] !== charS ) {
      return false 
    }

  }

  return true 

};


console.log( isIsomorphic("paper", "title")); // true