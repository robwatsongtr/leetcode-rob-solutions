/*
1929. Concatenation of Array

Given an integer array nums of length n, you want to create an array 
ans of length 2n where ans[i] == nums[i] 
and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

*/

var getConcatenation = function(nums) {
  let ans = []
  for( let i = 0; i < nums.length; i++) {
    ans.push(nums[i])
  }
  for( let i = 0; i < nums.length; i++) {
    ans.push(nums[i])
  }
  return ans 
};

var getConcatenation2 = function(nums) {
  let ans = new Array(nums.length * 2); // Create an array of the desired length
  console.log(ans)
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i]; // Assign the element at index i from nums to the corresponding index in ans
    ans[i + nums.length] = nums[i]; // Assign the same element to the index shifted by nums.length in ans
  }
  
  return ans;
};

console.log(getConcatenation([1, 2, 1]));


console.log( getConcatenation2([1,2,1]) )