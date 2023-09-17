/*

Leetcode 28, implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

-haystack is an input string

-needle is a contiguous substring that is being searched for in 
the haystack. 



*/


var strStr = function(haystack, needle) {
  if( !needle ) return 0;
 if( needle.length > haystack.length ) return -1; 
 
 for( let i = 0; i < haystack.length; i++) { 
   // check for full match at each starting i 
   // while loop is best 
   let j = 0 
   while (j < needle.length && haystack[i + j] === needle[j]) {
     j++;
   }
   
   if (j === needle.length) {
     return i;
   }
 }

 return -1;   
};

console.log( strStr('hello', 'll') );