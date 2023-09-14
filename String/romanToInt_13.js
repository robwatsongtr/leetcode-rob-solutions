// LC 13 Roman to Integer

/*

Given a roman numeral, convert to integer:

Approach:

store romans to integers in hash table:

iterate from the end of the string

  Always check if character after character being looked at is lesser than
  if so, subract that from the character being looked at 

  if not, then just add current character to result

*/ 

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

  let result = 0; 
  
  const lookup = new Map();

  lookup.set('I', 1);
  lookup.set('V', 5);
  lookup.set('X', 10);
  lookup.set('L', 50);
  lookup.set('C', 100);
  lookup.set('D', 500);
  lookup.set('M', 1000);


  // get the value of the last roman numeral in string and store in result 
  let lastIdx = s.length - 1 
  result = lookup.get(s[lastIdx])
   
  // iterate backwards over string starting from second to last character
  for( let i = s.length - 2; i >= 0; i-- ) {

    // if character after i is less than i, subtract
    if( lookup.get( s[i] ) < lookup.get( s[i+1]) ) {
      result -= lookup.get(s[i])
    } else {
      // character after i s greater than, so add
      result += lookup.get(s[i])
    }
    
  }

  return result; 
  
};

// console.log( romanToInt("MMXVII") );



var romanToInt2 = (s) => {

  const lookup = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let end = s.length - 1 
  let result = lookup[ s[end] ]

  for( let i = s.length - 2; i >= 0; i--) {
    if( lookup[ s[i] ] < lookup[ s[i+1] ] ) {
        result = result - lookup[ s[i] ]
    } else {
        result = result + lookup[ s[i] ]
    }
  }

  return result 

}


console.log( romanToInt2("MCMXCIV") );