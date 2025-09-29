/*
2109. Adding Spaces to a String

You are given a 0-indexed string s and a 0-indexed integer array spaces that 
describes the indices in the original string where spaces will be added. 
Each space should be inserted before the character at the given index.

For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces 
before 'Y' and 'C', which are at indices 5 and 9 respectively. 

Thus, we obtain "Enjoy Your Coffee".

Return the modified string after the spaces have been added.


*/

var addSpaces = function(s, spaces) {
  let modifiedString = []; // store charcters of the modified string 
  let spaceIndex = 0; // keep track of the current space position in spaces array

  for (let i = 0; i < s.length; i++) {
    // if we haven't reached the end of the string AND we are at the position of a space,
    // push a space to the resut array, then go to the next position in the spaces array  
    if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
      modifiedString.push(' ');
      spaceIndex++; // 
    }
    // push the next character to the result array
    modifiedString.push(s[i]);
  }

  // take the result array of characters and join back to a string
  return modifiedString.join('');
};


console.log( addSpaces('thisIsARunOn', [0, 4, 6, 7, 10]) )