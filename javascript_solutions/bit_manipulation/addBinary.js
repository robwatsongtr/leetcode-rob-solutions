/*
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

const addBinary = (a, b) => {

  // helper function to pad binary string with zeros 
  function padWithZeros(str, length) {
    for( let i = str.length; i < length; i++ ) {
      str = '0' + str 
    }
    return str 
  }
 
  // figure out the length of the longer binary string 
  const strMaxLength = Math.max( a.length, b.length )
  
  // pad with zeros the shorter of the binary strings 
  const bString1 = padWithZeros(a, strMaxLength)
  const bString2 = padWithZeros(b, strMaxLength)

  let result = ""
  let carry = 0
 
  // iterate in reverse from the least significat bit ( rightmost / end )
  for( let i = strMaxLength - 1; i >= 0; i--) {
    let bit1 = parseInt(bString1[i], 2) // parse to base 2
    let bit2 = parseInt(bString2[i], 2) // parse to base 2 

    const sum = bit1 ^ bit2 ^ carry;
    carry = (bit1 & bit2) | (carry & (bit1 ^ bit2));

    result = sum.toString() + result;

  }

  if (carry) {
    result = '1' + result;
  }

  return result 

}


console.log( addBinary('10110', '00110'))