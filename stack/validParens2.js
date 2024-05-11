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

const validParens2 = (s) => {
  let stack = []
  let parensMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for ( let i = 0; i < s.length; i++ ) {
    let currentBracket = s[i]

    // good to check if stack is empty 
    let topOfStack = stack.length > 0 ? stack[stack.length - 1] : null 
    
    // if the current character is an opening bracket 
    if( currentBracket in parensMap) {
      // push it to the stack 
      stack.push(currentBracket)
      // else, if the current character is a closing bracket, check if it matches the most recent
      // opening bracket on the stack 
    } else if( currentBracket === parensMap[topOfStack] ) {
      // if it does pop the opening bracket off the stack 
      stack.pop()
    } else {
      // If it doesn't match or there's no opening bracket in the stack, return False.
      return false 
    }
  }
  // if the stack is empty here then return true, the parens are balanced.
  return stack.length === 0 ? true : false 

}


console.log( validParens2('([()])'))