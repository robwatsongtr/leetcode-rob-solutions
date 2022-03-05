/*
LC 20 Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', 
'[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Pseudocode: 

1. if you have an opening bracket, then stack it.

2. if you have a closing backet matching the top of your stack, 
    then pop your stack
3. else it means that your string is invalid

4. if you're out of the loop and you still have something on your stack, 
  it means you didn't close all your brackets which means it is invalid. 

  If it is empty, the all brackets are closed which means it is valid.



*/

/**
 * @param {string} s
 * @return {boolean}
*/

var isValid = function(s) {

  let stack = [];
  let parensMap = new Map()

  parensMap.set('(',')')
  parensMap.set('{','}')
  parensMap.set('[',']')

  
  for( let i = 0; i < s.length; i++) {

    let nextOne = stack.length - 1;
    let currentBracket = s[i];

    // if you have an opening bracket, stack it.
    if( parensMap.get(currentBracket) ) {
      stack.push( currentBracket ) 
    } 
    // if you have a matching closing bracket to what's in the stack, pop it 
    else if( parensMap.get[nextOne] === parensMap.get(currentBracket) ) {
      stack.pop()
    }
    // no matching, so invalid
    else {
      return false; 
    }

    console.log(stack)

  }

  if( stack.length === 0 ) return true;

  return false; 
    
};

console.log( isValid( "{}{" ) )