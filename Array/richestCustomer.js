// 1672 Richest Customer Wealth

/*
You are given an m x n integer grid accounts where accounts[i][j] is 
the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth.

*/

var maximumWealth = function(accounts) {
  let maxWealth = 0
  function sumRow(row) {
    let total = 0
    for( let i = 0; i < row.length; i++) {
      total += row[i]
    }
    return total
  }

  for( let i = 0; i < accounts.length; i++) {
    let rowTotal = sumRow(accounts[i])
    maxWealth = Math.max(maxWealth, rowTotal)
  }

  return maxWealth

};

console.log( maximumWealth([ [7,1,3], [2,8,7], [1,9,5] ]))