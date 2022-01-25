// LC 2032 Two Out of Three

/*

Given three integer arrays nums1, nums2, and nums3, return a 
distinct array containing all the values that are present in at l
east two out of the three arrays. You may return the values in any order.

*/

const twoOutOfThree = (nums1, nums2, nums3) => {

  let nums1map = {}
  let nums2map = {}
  let nums3map = {}

  for( let val of nums1 ) {
    console.log(nums1map)
    nums1map[val] = (nums1map[val] || 0) + 1
  }

  console.log(nums1map)


}


console.log( twoOutOfThree( [1,1,3,2,1,3,4,2,1], [2,3], [3] ) ) 