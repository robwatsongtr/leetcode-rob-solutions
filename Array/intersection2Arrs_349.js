// LC 349 Intersection of Two Arrays
/*

Given two integer arrays nums1 and nums2, 
return an array of their intersection.
Each element in the result must be unique and you may 
return the result in any order.

Approach: Turn the arrays into sets, then do a hash table lookup. 

*/


var intersection = function(nums1, nums2) {

  let numset1 = new Set(nums1);
  let numset2 = new Set(nums2);
  let numset1map = {}
  let numset2map = {}
  
  let result = [];      
  
  for( let val of numset1) {
    numset1map[val] = (numset1map[val] || 0) + 1
  }
  for( let val of numset2) {
    numset2map[val] = (numset2map[val] || 0) + 1
  }
  
  for( let key in numset1map ) {
    if( key in numset2map) {
      result.push(key);
    }
  }

  return result; 
 

};


console.log( intersection( [1,2,2,1], [2,2] ) )