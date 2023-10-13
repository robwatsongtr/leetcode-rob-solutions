/*

Calculate minimum difference between two numbers in a sorted array

*/



function calcMinSorted(arr) {
  let minDiff = Infinity
  
  for( let i = 1; i < arr.length; i++ ) {
    let absDiff = Math.abs( arr[i] - arr[i - 1] )
    if( absDiff < minDiff ) {
      minDiff = absDiff
    }
  }

  return minDiff
}