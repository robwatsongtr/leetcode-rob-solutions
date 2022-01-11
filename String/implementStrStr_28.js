/*

Leetcode 28, implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

-haystack is an input string

-needle is a contiguous substring that is being searched for in 
the haystack. 



*/


const strStr = (haystack, needle) => {

  if( haystack.length === 0 || needle.length === 0 ) return 0;
  if( needle.length > haystack.length ) return -1; 
  
  for( let i = 0; i < haystack.length; i++) { 
    for( let j = 0; j < needle.length; j++) {
      // console.log( 'string', haystack[i], i,  'pattern', needle[j], j );
      if( needle[j] !== haystack[i+j] ) {
        // console.log('break');
        break ;
      }
      if( j === needle.length - 1) {
        return i; 
      }
    }
  }

  return -1;   
  

};


console.log( strStr('hello', 'll') );
