// Rotate Array LC 189

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/

// my correct but not to spec solution  

var rotate = function(nums, k) {
  const left = nums.slice(-k);  // negative numbers work from end
  const right = nums.slice(0, nums.length - k );
  nums = left.concat(right);

  return nums; 
};


// console.log( rotate([1,2,3,4,5,6,7], 3) ) // [5,6,7,1,2,3,4]
// console.log( rotate([-1,-100,3,99], 2 ) ) // [3,99,-1,-100]


// short LC solution to spec  

var rotate2 = function(nums, k) {
  const r = k % nums.length;
  if(r === 0 || nums.length <= 1) {
    return;
  }
  nums.push(...nums.splice(0, nums.length - r) );

  console.log(nums);
}

console.log( rotate2([1,2,3,4,5,6,7], 3) ) // [5,6,7,1,2,3,4]
console.log( rotate2([-1,-100,3,99], 2 ) ) // [3,99,-1,-100]