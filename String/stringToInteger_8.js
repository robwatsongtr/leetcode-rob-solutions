/*

Lc 9 String to Integer

Implement the myAtoi(string s) function, which converts a string 
to a 32-bit signed integer (similar to C/C++'s atoi function).


*/



const myAtoi = (s) => {

  let maxValue = 2e31 - 1; 
  let minValue = -2e31; 

  let space = 32
  let negSign = 45; 

  let mul = 1; 
  let curr = '';

  let result = 0

  for( let i = 0; i < s.length; i++) {
    
    // read in each character as an ascii code 
    curr = s.charCodeAt(i);
    
    // deal with leading whitespace 
    if( curr === space ) continue; 
    
    // if we see a negative sign, multiplier becomes -1 to make final 
    // number negative later 
    if( curr == negSign ) {
      mul = -1 * mul;
      continue; 
    }

    // break out of loop if a non-number character is encountered
    if( curr < 48 || curr > 57 ) break; 

    // simple 'overflow check' 
    if( result > maxValue ) {
      result = maxValue;
      break;  
    }
    if( result < minValue ) {
      result = minValue;
      break; 
    }

    // remember -48 because char codes 
    result = ( (result * 10) + curr ) - 48

  
    console.log(result);
     
  }


  return result * mul;  


}

console.log( myAtoi('  -91283 472332343434  ere') )