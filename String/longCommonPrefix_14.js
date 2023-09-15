/*
LC 14

Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""

Approach:

make the entire first string as the prefix.
Each iteration shorten the prefix based on what's there in the other strings


*/



const longestCommonPrefix = (strs) =>  {
  if( strs.length === 0) return ''; 

  // make the whole first string the 'prefix' 
  let prefix = strs[0];

  // loop throug the rest of the strings in the array 
  for( s of strs ) {  

    // as long as we haven't found the exact prefix yet..
    while( !s.startsWith(prefix) ) {

      // chop the prefix down by one character 
      prefix = prefix.substring(0, prefix.length - 1);

      // if the prefix is chopped down to nothing (isEmpty), then there is no common prefix 
      if ( prefix.isEmpty ) return ''; 
    }
  }

  return prefix; 
}

console.log( longestCommonPrefix( ["flower","flaw","floght"] ) )