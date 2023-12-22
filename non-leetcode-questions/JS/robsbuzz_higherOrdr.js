/*

From Robert Diamond, Feb 2022 

No `for` loops allowed:

a) Given an array of arbitrary size from 0 to ∞, give me the sum of the even numbers
b) Given the same array and an integer n > 0, give me the sum of all the numbers 
that are even integer multiples of n
b) Given the same array, 
return a string array of the “fizzbuzz” output for each number in the array

*/


// version with for loop for educational and testing purposes:
const robsBuzzFor = (arr, n) => {

  let sumEven = 0; 
  let sumMulipleOf = 0; 

  for( let i = 0; i < arr.length; i++ ) {
    if( arr[i] % 2 === 0 ) {
      sumEven += arr[i]
      console.log(arr[i]); 
    }
  }
  console.log('sum of even numbers:', sumEven); 

  for( let i = 0; i < arr.length; i++ ) {
    if( arr[i] % n === 0 ) {
      sumMulipleOf += arr[i]
      console.log(arr[i], ' fizzbuzz');
    }
  }
  console.log('sum of numbers that are a multiple of', n, 'is', sumMulipleOf);

} 


// version using HIGHER ORDER FUNCTIONS!!!!!!!! 
const robsBuzzHigherOrder = (arr, n) => {

  // sum of even numbers: 
  //
  // chain filter into reduce: first extract even numbers, then add them 
  const addAllEvens = arr.filter(num => (num % 2 === 0)).reduce((prev, curr) => prev + curr)
  console.log(addAllEvens);



  // sum of multiples of n, with fizzbuzz output on each num in array"
  //
  // get an array that has multiples of n:
  const arrMultiplesOfN = arr.filter( num => (num % n === 0) )
  console.log(arrMultiplesOfN);

  // add the array with 'fizzbuzz' after each number in array. ForEach shall be used.
  let total = 0; 
  arrMultiplesOfN.forEach( (num) => {
    total += num;
    console.log(num, ' fizzbuzz');
  })
  console.log(total)


}



// console.log( robsBuzzFor( [9,13,4,8,23,16,11,124,33,32], 3) )

console.log( robsBuzzHigherOrder( [9,13,4,8,23,16,11,124,33,32], 3) )