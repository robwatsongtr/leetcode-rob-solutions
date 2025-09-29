var twoSum = (nums, target) => {
  let result = []
  let hashmap = {}

  for( let i = 0; i < nums.length; i++ ) {
    hashmap[nums[i]] = i
    let complement = target - nums[i] 

    if( complement in hashmap) {
      result[0] = hashmap[complement]
      result[1] = i
    }
    
  }
  return !result.length ? 'not found' : result 
}