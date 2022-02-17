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



const countGoodSubstrLen3 = s => {

  let idx = 0;
  let count = 0;

  while( idx < s.length ) {
    
    // make a size 3 slice of the input array from current index to current index + 3
    let subString = s.slice( idx, idx+3) 

    //console.log(subString) 

    let set = new Set(subString);
    
    // check substring for uniqueness by seeing if it's both size 3
    // and a proper set
    if( set.size === 3) count++;

    idx++; 

  }
  
  return count; 
    
};


console.log( countGoodSubstrLen3('aababcabc'))
