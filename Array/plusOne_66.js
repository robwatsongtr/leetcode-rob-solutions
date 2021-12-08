/*

LC 66 Plus One

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

----Pseudocode: --

3 cases to consider. 

simplest: last digit of the array is not a 9. Just incremet the digit

if last digit of array is a 9, then you change the 9 to a zero and the loop
iterates to the next tens place and increments that. 

finally, if the [0] digit is 9 make a new array that starts with a 1 and has an
extra zero in it at the end. 

*/


var plusOne = function(digits) {

  for( let i = (digits.length - 1); i >= 0; i-- ) {

    // if less than 9, just increment the current tens place 
    if( digits[i] < 9 ) {
      digits[i]++;  
      return digits; 
    } 
    
    // if 9, change current tens place to 0, loop will then increment
    // the next tens place above since its iterated on to the next tens place.  
    digits[i] = 0;   
    
  }

  // case for 99 or 999 or 9999...etc 
  let length = digits.length + 1;
  let newNumber = new Array(length).fill(0) ;
  newNumber[0] = 1;
  return newNumber
 
};


console.log( plusOne( [4,3,2,1] ) );
console.log( plusOne( [4,3,2,8] ) ); 
console.log( plusOne( [4,3,3,9] ) ); 
console.log( plusOne( [9,9,9,9] ) ); 
// console.log( plusOne( [4,3,2,8] ) ); 

