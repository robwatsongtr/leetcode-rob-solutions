/*
2053. Kth Distinct String in an Array

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the 
kth distinct string present in arr. 
If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.




*/


var kthDistinct = function(arr, k) {
  let map = {}
  let distinctArr = []
   
  for( let val of arr ) {
    map[val] = (map[val] || 0) + 1 
  }
  
  console.log(map)

  for( let val in map ) {
    if( map[val] === 1 ) {
      distinctArr.push(val)
    } 
  }

  // return the first string in input array if all strings distinct
  if( JSON.stringify(distinctArr) === JSON.stringify(arr) ) {
    distinctArr = arr[0]
    return distinctArr
  }

  if( distinctArr.length < k ) return ''

  return distinctArr[k-1]


};

// GPT:
var kthDistinct2 = function(arr, k) {
  let map = {};
  let distinctArr = [];
   
  // keeps track of the order in which distinct strings appear in the distinctArr
  for (let val of arr) {
    if (!map[val]) {
      distinctArr.push(val);
    }
    map[val] = (map[val] || 0) + 1;
  }
  
  if (distinctArr.length < k) return '';
  
  return distinctArr[k - 1] || '';
};



// console.log( kthDistinct( ["d","b","c","b","c","a"], 1) )

console.log( kthDistinct(["aaa","aa","a"], 1))