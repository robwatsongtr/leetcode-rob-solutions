/**
 * 
 * Given an array of integers nums and an integer target, return indices of 
 * the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you 
 * may not use the same element twice.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(arr, target) {
//   const map = {}
//   const solution = []
//   arr.forEach((obj, idx) => {
//       map[obj] = idx
//   })
//   for (var i=0; i < arr.length; i++) {
//       var find = target - arr[i];
//       if (map[find] && map[find] != i) {
//           solution.push([i,map[find]])
//           map[find] = null
//           map[arr[i]] = null
//       }
//   }
//   return solution
  
};

console.log( twoSum( [2,7,11,15], 9 ) );