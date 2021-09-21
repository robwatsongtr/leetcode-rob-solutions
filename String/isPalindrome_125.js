/*

Given a string s, determine if it is a palindrome, considering 
only alphanumeric characters and ignoring cases.

*/



var isPalindrome = function (s) {
  
  // important regex 
  s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  // two pointer technique. move from both ends towards the middle 
  var lp = 0;
  var rp = s.length - 1;

  while ( lp <= rp ) {
    console.log(lp, rp);
    if( s[lp] !== s[rp] ) {
      return false; 
    }
    lp++;
    rp--; 
    
  }
  return true; 
}

console.log( isPalindrome('abcccba') ); // true 

console.log( isPalindrome('abccfa') ); // false

console.log( isPalindrome('Madam, Im adam.') ) ; // true 


