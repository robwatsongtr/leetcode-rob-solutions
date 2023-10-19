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

  function padWithZeros(str, length) {
    for( let i = str.length; i < length; i++) {
      str = '0' + str 
    }
    
    return str 
  }
 
  const strMaxLength = Math.max( a.length, b.length )
  
  bString1 = padWithZeros(a, strMaxLength)
  bString2 = padWithZeros(b, strMaxLength)

  console.log(bString1, bString2)

}


console.log( addBinary('0110', '1110110'))