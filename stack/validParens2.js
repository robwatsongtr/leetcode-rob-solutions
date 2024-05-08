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
    
    // if the current bracket in the string (key) has a corresponding closing bracket (value)
    if( currentBracket in parensMap) {
    // push it to the strack 
      stack.push(currentBracket)
      // else, if the current bracket matches a bracket in the stack, 
    } else if( currentBracket === parensMap[stack[stack.length-1]] ) {
      // then pop it off the stack 
      stack.pop()
    } else {
      // else no matching bracket 
      return false 
    }
  }

  return stack.length === 0 ? true : false 

}


console.log( validParens2('([()])'))