
/**
 * Given a sorted array nums, remove the duplicates in-place 
 * such that each element appears only once and returns the new length.
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    let j = 1;

    // i and j start on [0] and [1]
    // Increment j as long as there is a duplicate.
    // When dupliate run ends, increment i, copy j to i+1
    // when j reaches end of the array, return i 
    for( j ; j < nums.length ; j++) {
      if (nums[j] != nums[i] ) i++;
      nums[i] = nums[j]
    }
    return i + 1;  

};

console.log( removeDuplicates( [0,0,1,1,1,2,4,4,5] ) )