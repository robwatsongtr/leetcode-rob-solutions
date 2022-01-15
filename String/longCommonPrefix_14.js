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

  // loop through each string in the arry 
  for( let i = 1; i < strs.length; ++i ) {
    
    // while we cannont find the full word we're comparing against the first
    while( strs[i].indexOf(prefix) !== 0 ) {

      // reduce the size of the prefix by 1
      prefix = prefix.substring(0, prefix.length - 1);

      console.log(prefix);

      // no match in word being compared;
      if ( prefix.isEmpty ) return ''; 


    }

  }

  return prefix; 

}

console.log( longestCommonPrefix( ["flower","flow","floght"] ) )