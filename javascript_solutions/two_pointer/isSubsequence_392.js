
function isSubsequence (s, t) {
  let i = 0; 
  let j = 0;

  // edge case if both strings are empty 
  if( !s && !t ) return true;

  while( j < t.length ) {
    if (t[j] === s[i] ){ 
      i++;
    }
    j++

    if (i === s.length) return true;
  }

  return false; 
}