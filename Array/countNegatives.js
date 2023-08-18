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
  let total = 0

  function checkRow(row) {
    let total = 0
    for( let i = 0; i < row.length; i++ ) {
      if( row[i] < 0 ) total++
    }
    return total
  }

  
  for( let i = 0; i < grid.length; i++ ) {
    let rowTotal = checkRow(grid[i])
    total += rowTotal
  }

  return total 
};

// more concise, with nested for loops
var countNegatives2 = (grid) => {
  let total = 0

  for( let i = 0; i < grid.length; i++) {
    let rowTotal = 0
    for( let j = 0; j < grid[i].length; j++) {
      if( grid[i][j] < 0) rowTotal++
    }
    total += rowTotal
  }

  return total 
}


// O(m + n) solution (from Leetcode): 
var countNegatives3 = function(grid) {    
  //initiate the grid with columnLen(height) = number of elements(4) in the arrays of array
  //rowLen(width) is number of elements in the first array(4)
  let columnLen = grid.length;
  let rowLen = grid[0].length;
  
  //col is initialized at 0 so we get the first array
  //row represents starting from the last element
  //initialize count for number of negative numbers
  let col = 0;
  let row = rowLen-1;
  let count = 0;
  
  
  //while loop runs as long as columns and rows aren't out of bounds
  //if a specific element in the array is negative, we add to count
  //everything under the negative element is negative too since it's a sorted matrix
  //after we add count, we move one to the left
  //if element is not negative, we move to next column(next array)
  while (col < columnLen && row >= 0) {
      if (grid[col][row] < 0) {
          count += columnLen - col;
          row--;
      } else {
          col++;
      }
  }
  return count;
}

console.log( countNegatives( [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] ))

console.log( countNegatives2( [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] ))