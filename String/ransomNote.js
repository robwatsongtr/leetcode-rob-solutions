/*
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can 
be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Approach: Hash map / frequency counter 'ransom note'
and 'magazine'


*/


var canConstruct = function(ransomNote, magazine) {
    
  let ransomNoteMap = {}
  let magazineMap = {}

  for( val of ransomNote) {
    ransomNoteMap[val] = (ransomNoteMap[val] || 0) + 1
  }

  for( val of magazine ) {
    magazineMap[val] = (magazineMap[val] || 0) + 1
  }

 
  for( key in ransomNoteMap) {
    // magazine must have the letters of the ransom note 
    if( !(key in magazineMap) ) {
      return false
    }
    // Each letter in magazine can only be used once in ransomNote.
    if( ransomNoteMap[key] > magazineMap[key] ) {
      return false 
    }
  }

  return true 

};


console.log( canConstruct('a', 'b') ) // false 