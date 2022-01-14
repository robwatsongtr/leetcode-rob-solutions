/*

Lc 9 String to Integer

Implement the myAtoi(string s) function, which converts a string 
to a 32-bit signed integer (similar to C/C++'s atoi function).


*/



const myAtoi = (s) => {

  let max = 0xffffffff; 
  let min = -max-1; 

  let sawNum = false; 
  let skipSpace = true; 

  let space = 32
  let negSign = 45; 

  let mul = 1; 
  let curr = '';

  let result = 0

  for( let i = 0; i < s.length; i++) {
    
    // read in each character as an ascii code 
    curr = s.charCodeAt(i);
    
    // restart loop on a whitespace 
    if( curr === space && skipSpace ) continue; 

    skipSpace = false; 

    if( !sawNum && curr == negSign ) {
      mul = -1 * mul;
      continue; 
    }

    // break out of loop if a non-number character is encountered
    if( curr < 48 || curr > 57 ) break; 

    // if( mul === -1 ) {
    //   if( result >= -(min/10)) break;
    // } else {
    //   if ( result >= (max/10) || max - val < place ) break; 
    // }

    result = ( (result * 10) + curr) - 48

    console.log(result);
     
  }
  
  

  return result * mul;  


}

console.log( myAtoi(' -438455') )