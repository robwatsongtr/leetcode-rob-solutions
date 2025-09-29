// 1480. Running Sum of 1d Array

/*
Given an array nums. We define a running sum of an array as 
runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/

var runningSum = function(nums) {
  let result = []
  let total = 0
  for( let i = 0; i < nums.length; i++ ) {
    console.log(total)
    total = total + nums[i]
    result.push(total)
  }
  return result
};


console.log( runningSum([1,3,7,9]) )


var runningSum2 = (nums) => {
  let total = 0
  return nums.reduce( (result, currenNum) => {
    total = total + currenNum
    result.push(total)
    return result
  }, [])
}

console.log( runningSum2([1,3,7,9]) )