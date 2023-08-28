/*
1108. Defanging an IP Address

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".


Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.


*/


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
  let stringArr = address.split('')

  for( let i = 0; i < stringArr.length; i++ ) {
    if( stringArr[i] === '.') {
      stringArr.splice(i, 0, '[')
      i++ // Increment i to account for the inserted character 
      stringArr.splice(i + 1, 0, ']') 
      i++ // increment i once again 
    }
  }


  return stringArr.join('')

};

console.log( defangIPaddr('255.100.50.0'))



// ChatGPT version 
var defangIPaddr2 = function(address) {
  const stringArr = address.split('');
  const resultArr = [];

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === '.') {
      resultArr.push('[', stringArr[i], ']');
    } else {
      resultArr.push(stringArr[i]);
    }
  }

  return resultArr.join('');
};

console.log(defangIPaddr('255.100.50.0'));