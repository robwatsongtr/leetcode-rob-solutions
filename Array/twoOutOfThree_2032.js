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

  let result = []

  for( let val of nums1 ) {
    // console.log(val)
    nums1map[val] = (nums1map[val] || 0) + 1 ;
    // console.log(nums1map)
  }
  for( let val of nums2 ) {
    // console.log(val)
    nums2map[val] = (nums2map[val] || 0) + 1 ;
    // console.log(nums1map)
  }
  for( let val of nums3 ) {
    // console.log(val)
    nums3map[val] = (nums3map[val] || 0) + 1 ;
    // console.log(nums1map)
  }

  // we got the maps. Now check the first array against the second and third
  for( let key in nums1map) {
    if( key in nums2map || key in nums3map) {
      result.push(key)
    }
  }

  // now check the second array against the third 
  for( let key in nums2map) {
      if( (key in nums2map || key in nums3map) && (!result.includes(key) ) ) {
        result.push(key)
      }
  }


  
  return result; 

}


console.log( twoOutOfThree( [1,1,3,2], [2,3], [3] ) ) 