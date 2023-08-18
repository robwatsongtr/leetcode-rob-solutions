/*
1351. Count Negative Numbers in a Sorted Matrix

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and 
column-wise, return the number of negative numbers in grid.

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

  function checkRow(row) {
    let total = 0
    for( let i = 0; i < row.length; i++ ) {
      if( row[i] < 0 ) total++
    }
    return total
  }

  let total = 0
  for( let i = 0; i < grid.length; i++ ) {
    let rowTotal = checkRow(grid[i])
    total += rowTotal
  }

  return total 

};

console.log( countNegatives( [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] ))