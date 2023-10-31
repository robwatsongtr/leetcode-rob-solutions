/*
9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

var isPalindrome = function(x) {
  
  // negative number cannot be a palindrome
  if( Math.sign(x) === -1 ) return false

  // single digit number is automatically a palindrome 
  if( x >= 0 && x <= 9) return true

  let reverseNum = 0
  let temp = x

  while( temp > 0 ) {
    // calculate digit as the last digit of the original using modulo
    let digit = temp % 10;
    // add digit to reverseNum to left by * 10, this effectively reverses the digits
    reverseNum = reverseNum * 10 + digit
    // remove the last digit from original 
    temp = Math.floor(temp / 10)
  }

  return x === reverseNum

};