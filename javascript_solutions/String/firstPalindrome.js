// LC 2108 Find First Palindromic String in the Array

/*
Given an array of strings words, return the first palindromic string in the array. 
If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.
*/

const firstPalindrome = function(words) {

  function isPalindrome(str) {
    let lptr = 0
    let rptr = str.length - 1
    while (lptr <= rptr) {
      if( str[lptr] !== str[rptr]) {
        return false
      }
      lptr++
      rptr--
    }
    return true
  }

  for (str of words) {
    let checkIfPalindrome = isPalindrome(str)
    if(checkIfPalindrome) return str
  }  
    
  return ''
};



console.log( firstPalindrome(["def","ghi"]) )