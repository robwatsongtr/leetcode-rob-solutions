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

  // edge cases, either or both strings empty, or needle longer than haystack
  if( haystack.length === 0 || needle.length === 0 ) return 0;
  if( needle.length > haystack.length ) return -1; 

  // lets make some hash maps 
  let haystackMap = {};
  let needleMap = {};
  
  for ( let letter of haystack ) {
    haystackMap[letter] = (haystackMap[letter] || 0) + 1; 
  }

  for( let letter of needle ) {
    needleMap[letter] = (needleMap[letter] || 0) + 1; 
  }

  console.log('haystack map', haystackMap);
  console.log('needle map ', needleMap);

  // lets do some window sliding 
  let i = 0;
  let j = 1; 

  while( j < haystack.length ) {



  }

  return -1;
  

};


console.log( strStr('hello', 'll') );