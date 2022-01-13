/*

Lc 9 String to Integer

Implement the myAtoi(string s) function, which converts a string 
to a 32-bit signed integer (similar to C/C++'s atoi function).


*/

const myAtoi = (s) => {

  let inNumber = false; 

  let max = 2e31-1; 
  let min = -2e31; 

  let space = 32
  let negSign = 45; 

  let negative = false;
  
  let curr = '';
  let digitArr = []

  for( let i = 0; i < s.length; i++) {
    
    // read in each character as an ascii code 
    curr = s.charCodeAt(i);
    
    // restart loop on a whitespace 
    if( curr === space ) continue; 

    // break out of loop if a non-number character is encountered
    if( curr < 48 || curr > 57 ) break; 

    // note if negative sign is present 
    if( curr === negSign ) {
      negative = true; 
    }

    console.log(curr)

    digitArr.push( ((curr - 48) * 10) + curr )  

  }
  

  return digitArr;  


}

console.log( myAtoi(' 438') )