/*
Valid Parenthesis

Pseudocode:
define stack 
define a hashmap

-insert into hashmap key value pair of
  Key: (   value: )
  Key: [   value: ]
  Key: {   value: }

-Begin Loop
  Define two variables
    Current bracket 
    Top of stack

  If you have an opening bracket, push on to stack
  else if you have a matching closig bracket to what's in the stack, pop it
  else no matching bracket so return false
-End loop

now if the stack is empty return true, otherwise return false 


*/

const isValid = (s) => {
  let stack = []
  let map = new Map()

  map.set('(',')')
  map.set('[',']')
  map.set('{','}')

  console.log(map)

  for( let i = 0; i < s.length; i++ ){
    console.log(stack)
    let currBracket = s[i];
    let topOfStack = stack[stack.length - 1]
    // if you have an opening bracket, push to stack
    if( map.get(currBracket) ) {
      stack.push(currBracket)
      // if you have a matching bracket to what's in the stack, pop it 
    } else if ( map.get(topOfStack) === currBracket) {
      stack.pop()
      // otherwise no matching bracket so return false 
    } else {
      return false
    }
  }
  // all the brackets are gone through, if the stack is empty we're good else return false 
  return !stack.length ? true : false 
}

console.log( isValid("()[]{}"))