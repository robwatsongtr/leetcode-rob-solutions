/*
1047. Remove All Adjacent Duplicates In String

You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. 
It can be proven that the answer is unique.

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and 
equal, and this is the only possible move.  The result of this move is that the 
string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2:

Input: s = "azxxzy"
Output: "ay"


SOLUTION: USE STACK

Here's an example with the input string "abbaca":

In the first iteration, 'a' is pushed onto the stack.
In the second iteration, 'b' is pushed onto the stack.
In the third iteration, 'b' is popped from the stack since it's a duplicate.
In the fourth iteration, 'a' is popped from the stack since it's a duplicate.
In the fifth iteration, 'c' is pushed onto the stack.
In the sixth iteration, 'a' is pushed onto the stack.
After processing all characters, the stack contains ['c', 'a'], and they are joined to form the final result 'ca'.


*/

var removeDuplicates = function(s) {
  let stack = []
  for( let i = 0; i < s.length; i++) {
    console.log(stack)
    if( s[i] === stack[stack.length - 1] ){
      stack.pop(); 
    } else {
      stack.push(s[i]); 
    }
  }

  return stack.join('')
    
};


console.log( removeDuplicates("abbaca"))


