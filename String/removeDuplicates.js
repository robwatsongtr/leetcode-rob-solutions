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

*/

var removeDuplicates = function(s) {
  let stack = []
  for( let i = 0; i < s.length; i++) {
    console.log(stack)

  }

    
};


// console.log( removeDuplicates("abbaca"))


// Create an empty array to represent the stack
const stack = [];

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack after pushing elements:", stack); // [1, 2, 3]

// Pop elements from the stack
const poppedElement = stack.pop();
console.log("Popped element:", poppedElement); // 3
console.log("Stack after popping:", stack); // [1, 2]