/*

LC 7 Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit 
integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers 
(signed or unsigned).

*/

const reverseIntNomath = x => {

  let numString = x.toString();
  let stackArr = []
  let reverseArr = [] 
  let isNegative = false; 

  // build the stack 
  for( let i = 0; i < numString.length; i++ ) {
    stackArr.push( numString[i] ); 
  }

  // check for leading negative sign, if so
  // remove it and flip the isNegative boolean 
  if( stackArr[0] === '-') {
    isNegative = true; 
    stackArr.shift()
  }

  // pop off the stck into the reverse array 
  while( stackArr.length > 0 ) {
    reverseArr.push( stackArr.pop () )
  }

  // put back the negative sign if necessary
  // convert back to int and return 
  if( isNegative === false ) {
    return parseInt( reverseArr.join('') ); 
  } else {
    return parseInt( '-' + reverseArr.join('') ); 
  }

}


console.log( reverseIntNomath(-2345654) );