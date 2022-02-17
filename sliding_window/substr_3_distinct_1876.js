// LC 1876

/*

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every 
occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

Approach:

- Use a sliding window. The window is 3 characters, and moves by a 
character to the right on each loop. 

- Test each window for unique characters, if the window is 3 unique characters,
increment a unique counter. Return the counter.

*/

const checkForDuplicate = str => {
  let map = {};
  for( let key of str ) {
    map[key] = ( map[key] || 0 ) + 1; 
  }
  for( let key in map ) {
    if( map[key] > 1 ) return true; // duplicate!
  }
  return false; // no duplicate 
}

const countGoodSubstrLen3 = s => {

  if( s.length < 3 ) return 0; 

  let count = 0;
  let tempArr = []
  let leftPtr = 1; // second window starts at s[1]
  let rightPtr = 3; // second winow ends at [3]

  // load up the first length 3 substring, s[0] to s[2]
  for( let i = 0; i < 3; i++ ){
    tempArr.push( s[i] );
  }

  if( checkForDuplicate(tempArr) ) count++; 

  // sliding window loop
  

  console.log(tempArr, count)
    
};


console.log( countGoodSubstrLen3('xyzzaz'))
