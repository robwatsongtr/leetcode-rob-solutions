// LC 344 Reverse String
//
// Write a function that reverses a string.
// 
// We will be using the two pointer method, and no extra space / array


/**
* @param {character[]} s
* @return {void} Do not return anything, modify s in-place instead.
*/

// Technique: Two Pointers from opposite end that meet in the middle, 
// swapping as they iterate. 

var reverseString = function(s) {

  let leftPtr = 0;
  let rightPtr = s.length - 1; 
   

  while( leftPtr < rightPtr) {

    let temp = s[leftPtr];
    s[leftPtr] = s[rightPtr]
    s[rightPtr] = temp;

    leftPtr++;
    rightPtr--;

    // console.log(s);

  }

  return s; 
    
};

console.log( reverseString( ['h','e','l','l','o' ] )  );