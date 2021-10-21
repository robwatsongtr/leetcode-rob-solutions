/*
LC 3 Longest Substring Without Repeating Characters

Looking for a continuous subset of data in an array or letters in a string. 

Given a string s, find the length of the longest substring without 
repeating characters.

longest substring = sliding window
repeating characters = hash map to keep count of things 
*/


/**
 * @param {string} s
 * @return {number}
*/


const lengthOfLongestSubstring = (s) => {

  let max = 0; 

  // lookup 
  let map = new Map();

  // left and right boundaries of window  
  let leftIdx = 0;
  let rightIdx = 1;

  if( s.length === 1 ) return 1; // edge case
  
  // put left pointer in to map, 
  // because loop will start with second character 
  map.set( s[leftIdx], leftIdx ); 

  // move right hand side of window if there are no repeating chars
  // else move left side of window if there are repeating characters
  // and the index of that repeating character is greater than or 
  // equal to where the left pointer is at. 

  while( rightIdx < s.length ) {

    // check if letter at right pointer is in the map 
    // second && check is to ensure the left pointer keeps moving to the right
    // if both cases are true, NO REPEATING CHARACTER!
    if( map.has(s[rightIdx]) && map.get(s[rightIdx]) >= leftIdx) {
      leftIdx = map.get(s[rightIdx]) + 1;
      console.log("A leftIdx",leftIdx, "rightIdx",rightIdx)
    } 

    // add right pointer to the map
    map.set( s[rightIdx], rightIdx );
    console.log("B leftIdx",leftIdx, "rightIdx",rightIdx)

    // calculate size of the window, plus 1 because of zero indexing
    let windowLength = ( rightIdx - leftIdx ) + 1;

    // update the max 
    max = Math.max( max, windowLength );

    // move right pointer by one 
    rightIdx++; 

  }

  return max; 

};

console.log( lengthOfLongestSubstring('abcabccb') );