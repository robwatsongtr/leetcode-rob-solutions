/*
LC 1002 Find Common Characters

Given a string array words, return an array of all characters that show 
up in all strings within the words (including duplicates). 
You may return the answer in any order.

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Input: words = ["cool","lock","cook"]
Output: ["c","o"]

Approach:

Iterate through each word in the word array:
  for each word call a function that returns a character frequency hashmap for that word

Compare each hash map against every other hashmap and find the common characters




*/


var commonChars = function(words) {
  arrayOfObjs = []
  function getMap(str) {
    let map = {}
    for( let val of str) {
      map[val] = ( map[val] || 0) + 1
    }
    return map 
  }

  console.log(words)

  for( let word of words )  {
    let obj = getMap(word)
    arrayOfObjs.push(obj)
  }

  console.log(arrayOfObjs)
 
  const commonKeys = Object.keys(arrayOfObjs[0])

  console.log(commonKeys)

};


console.log( commonChars(["bella","label","roller"]))