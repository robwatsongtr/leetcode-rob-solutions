/*

LC 66 Plus One

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

----Pseudocode: --



*/


var plusOne = digits => {
  let carry = 1 // start with 1 becasue that's what we're adding 
  let end = digits.length -1

  for( let i = end; i >= 0; i-- ) {
    let sum = digits[i] + carry
    carry = Math.floor(sum / 10) // dividing by 10 isolages the most significant digit
    digits[i] = sum % 10 // modulo isolates the least sigificant digit
  }

  if( carry > 0 ) {
    digits.unshift(carry)
  }

  return digits

}





















var plusOne2 = function(digits) {

  for( let i = (digits.length - 1); i >= 0; i-- ) {

    // if less than 9, just increment the current tens place 
    if( digits[i] < 9 ) {
      digits[i]++;  
      return digits; 
    } 
    
    // if  digits[i] = 9, change current tens place to 0, loop will then increment
    // the next tens place above, since its iterated on to the next tens place. 
    // in the reverse for loop.  
    digits[i] = 0;   
    
  }

  // case for 99 or 999 or 9999...etc 
  let length = digits.length + 1;
  let newNumber = new Array(length).fill(0) ;
  newNumber[0] = 1;
  return newNumber
 
};


console.log( plusOne2( [4,3,2,1] ) );
console.log( plusOne2( [4,3,2,8] ) ); 
console.log( plusOne2( [4,3,3,9] ) ); 
console.log( plusOne2( [9,9,9,9] ) ); 
// console.log( plusOne( [4,3,2,8] ) ); 

