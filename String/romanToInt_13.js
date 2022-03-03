// LC 13 Roman to Integer

/*

Given a roman numeral, convert to integer:

Approach:

store romans to integers in hash table:
scan the string, look up as you go, add as you go.

*/ 

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

  let lookup = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
    IV : 4,
    IX : 9,
    XL : 40,
    XC : 90,
    CD : 400,
    CM : 900
  }

  console.log(lookup);
    
};

console.log( romanToInt() );