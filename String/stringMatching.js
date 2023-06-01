/*  

LC 1408 String Matching in an Array

Given an array of string words, return all strings in words that 
is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Algo: 

1. Check the lengths of all the strings.

2. If a string is the same length or shorter than aother string,
   compare the two strings. 



*/

function findSubstringWords(words) {
  const result = [];
  // nested loops compare each word against every other word 
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      // Inside the inner loop, we check if the current word 
      //(at index i) is not the same as the word being compared 
      // (at index j). We do this to avoid comparing a word with itself.
      if (i !== j && words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }
  
  return result;
}