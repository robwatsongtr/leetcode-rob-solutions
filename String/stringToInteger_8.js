/*

Lc 8 String to Integer

Implement the myAtoi(string s) function, which converts a string 
to a 32-bit signed integer (similar to C/C++'s atoi function).

Cannot overflow 32 bits posititve or negative. 

Overflow logic:
  an example:
  check to see if 11 * 10 is greater than 100 without going over 100
  do 100 / 10 = 10 (res), check if res is less than 11, true. 
  Which means too big

*/

const myAtoi = (s) => {

  let maxValue = 2e31 - 1; 
  let minValue = -2e31; 

  let space = 32
  let negSign = 45; 

  let mul = 1; 
  let curr = '';

  let result = 0

  // MAIN LOOP
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

    // OVERFLOW logic. first if is positive, else is negative 
    if (mul === 1) {

      // check if current value of result itself is too big:
      if( (maxValue / 10) < result ) break 

      // now check if current value of result plus curr is too big: 
      let tempResult = result * 10; 
      if( (curr - 48) >= (maxValue - tempResult) ) break;  

    } else {

      if( (minValue / 10) > result ) break; 
      let tempResult2 = result * 10;
      if( (curr - 48) <= (minValue + tempResult2) ) break; 

    }
 
    // remember -48 because char codes 
    result = ( (result * 10) + curr ) - 48

    // console.log(result);
     
  }


  return result * mul;  


}

console.log( myAtoi('429496729776786 ') )