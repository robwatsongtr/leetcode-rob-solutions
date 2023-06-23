/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Best time complexity Approach:

Greedy (DP) find the best solution at any given time, in a one pass for loop

Track the LOWEST PRICE and the MAX PROFIT at any given time. 

*/



var maxProfit = function(prices) {
  let minPrice = prices[0]
  let maxProfit = 0

  for( let currentPrice of prices) {
    
    // the minimum price is the lowest number we've seen or the current one 
    minPrice = Math.min( currentPrice, minPrice)

    // Max profit EITHER the current max profit 
    // OR (current price - minimum price) we've seen before
    maxProfit = Math.max(maxProfit, currentPrice - minPrice)
    
  }

  return maxProfit 
  
};

console.log(maxProfit( [7,1,5,3,7,4] ))