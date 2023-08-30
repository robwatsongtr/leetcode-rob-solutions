// A pretty good binary search implementation that takes care of an edge case
// of a one element array. 

var search = function(nums, target) {
  let min = 0
  let max = nums.length - 1
  
  while( min < max ) {
      middle = Math.floor( (min + max) / 2) 
      if( nums[middle] === target) {
          return middle
      // if middle is greater than target
      // search LEFT half 
      } else if( nums[middle] > target) {
          max = middle - 1
      // otherwise search RIGHT half 
      } else {
          min = middle + 1
      }
  }
  
  // edge case of a single element array if the single element
  // matches the target or not 
  return nums[min] === target ? min : -1;
};