/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const pStr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
  let lptr = 0
  let rptr = pStr.length - 1
  while( lptr <= rptr) {
      if( pStr[lptr] != pStr[rptr] ) return false
      lptr++
      rptr--
  }
  return true 
};