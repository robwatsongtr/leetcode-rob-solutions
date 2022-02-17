
function isSubsequence (str1, str2) {

  let i = 0; 
  let j = 0;

  // If the character at i is equal to character at j, i++
  // If i hits the end of str2 

  while(j < str2.length) {

    // edge case if both strings are empty 
    if( !s && !t ) return true;

    if (str2[j] === str1[i]) i++;

    if (i === str1.length) return true;

    j++
    
    
    // console.log('i: ', i, ' j: ', j );
  }

  return false; 

}