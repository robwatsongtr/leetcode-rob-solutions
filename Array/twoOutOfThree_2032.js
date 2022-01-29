// LC 2032 Two Out of Three

/*

Given three integer arrays nums1, nums2, and nums3, return a 
distinct array containing all the values that are present in at l
east two out of the three arrays. You may return the values in any order.

So values need to be present in arrays: 1 & 2, 1 & 3, and 2 & 3

*/

const twoOutOfThree = (nums1, nums2, nums3) => {

  let nums1map = {}
  let nums2map = {}
  let nums3map = {}

  let result = []

  for( let val of nums1 ) {
    // console.log(val)
    nums1map[val] = (nums1map[val] || 0) + 1 ; // ask how this works 
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

  //
  // So values need to be present in arrays: 1 & 2, or 1 & 3, or 2 & 3
  //

  // we got the maps. Now check 1 & 2, and 1 & 3
  for( let key in nums1map) {
    if( key in nums2map || key in nums3map) {
      result.push(key)
    }
  }

  // now check the second array against the third 
  for( let key in nums2map) {
    if( (key in nums3map ) && (!result.includes(key) ) ) {
      result.push(key)
    }
  }


  
  return result; 

}


console.log( twoOutOfThree( [1,2,2], [4,3,3], [5] ) ) 


// 
  