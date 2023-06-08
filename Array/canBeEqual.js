/*
1460. Make Two Arrays Equal by Reversing Subarrays

You are given two integer arrays of equal length target and arr. 
In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.

 

*/

var canBeEqual = function(target, arr) {
  
  let targetMap = {}
  let arrMap = {}

  for ( let val of target ) {
    targetMap[val] = ( targetMap[val] || 0) + 1
  }

  for ( let val of arr ) {
    arrMap[val] = ( arrMap[val] || 0) + 1
  }
 
  console.log(targetMap)
  console.log(arrMap)

  for( let key in arrMap ) {
   if( arrMap[key] !== targetMap[key] ) return false 
  }

  return true 
    
};


console.log( canBeEqual( [1,2,3,4], [4,3,2,1] ))