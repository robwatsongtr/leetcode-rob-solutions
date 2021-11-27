/*

  Intersection of Two Arrays 2, LC 350 

  Given two integer arrays nums1 and nums2, return an array of their intersection. 
  Each element in the result must appear as many times as it shows in both arrays 
  and you may return the result in any order.

  @param {number[]} nums1
  * @param {number[]} nums2
  * @return {number[]}


*/


var intersect = function(nums1, nums2) {
  let nums1map = {};
  let nums2map = {};

  let result = []

  for( let val of nums1 ) {
    nums1map[val] = (nums1map[val] || 0) + 1 ;
  }
  for( let val of nums2 ) {
    nums2map[val] = (nums2map[val] || 0) + 1; 
  }

  console.log(nums1map);
  console.log(nums2map);

  // now we have the hash maps, loop through second array 
  // and push into result array any values that exist in both arrays
  // and add that value as many times as the minimum that exists in both arrays

  for( let key in nums1map ) {
    if( key in nums2map ) {
      let x = Math.min()
    }
  } 

};

console.log( intersect( [4,9,5], [9,4,9,8,4]) );
// console.log( intersect( [1,2,2,1], [2,2] ) );