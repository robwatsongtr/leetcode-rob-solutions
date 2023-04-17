

const mulitSumZero = (nums) => {
  let result = []
  let hashMap = {}
  let target = 0 

  for (let i = 0; i < nums.length; i++) {
    
    hashMap[nums[i]] = i;     // hashmap stores the number in array and its index as its built             

    let complement = target - nums[i]; 

    if( complement in hashMap ) {
      result[0] = hashMap[complement];
      result[1] = i; 
    }
    console.log(hashMap)
  }

  return !result.length ? 'not found' : result 

}


console.log( mulitSumZero( [2,-2,11,15] )) // [ [ ‘2’, ‘1’ ], [ ‘4’, ‘3’ ], [ ‘6’, ‘5’ ] ]
 



// var twoSum = (nums, target) => {
//   let result = []
//   let hashMap = {}
//   console.log(`Target is ${target}`)

//   for (let i = 0; i < nums.length; i++) {

//     hashMap[nums[i]] = i;     // hashmap stores the number in array and its index as its built             

//     let complement = target - nums[i]; 

//     console.log(hashMap, `complement is ${complement}`)

//     if( complement in hashMap ) {
//       result[0] = hashMap[complement];
//       result[1] = i; 
//     }

//   }

//   return !result.length ? 'not found' : result 
// }

// console.log( twoSum([2,7,11,15,], 26))