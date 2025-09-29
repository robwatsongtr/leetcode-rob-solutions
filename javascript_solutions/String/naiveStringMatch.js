// Naive Strig Matching Algorithm 

function naiveStringMatch(str, text) {

  const strLen = str.length
  const textLen = text.length

  // main loop loops until 'str' hits the end of 'text'
  for( let i = 0; i <= textLen - strLen; i++  ) {

    let strPtr = 0 // pointer to loop each character of 'str'

    // inner loop loops letters of 'str' against 'txt' at given position i 
    //
    // while less than the length of str AND the text of 'str' matches with the text of 'text'
    while( strPtr < strLen && text[i + strPtr] === str[strPtr] ) {
      strPtr++ // inc strPtr
    }
    // we reached the end of str because the pointers match, substr found!
    if( strPtr === strLen ) {
      return [ true, i ]  
    }
  }

  return false
}