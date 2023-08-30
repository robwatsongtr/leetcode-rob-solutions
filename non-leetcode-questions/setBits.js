// Robert's quesiton:
// Count the number of 'set bits' in a passed in number

/*
Intuition:


*/

function toDecimal(toParse) {
  let total = 0
  for (var val of toParse) {
    total <<= 1 // total = total * 2
    total += val 
    console.log(`val: ${val}  total: ${total}`)
  }

  return total
}

console.log( toDecimal([1,1,1,0])) 