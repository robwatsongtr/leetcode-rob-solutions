/*
Aritmetically Swap two numbers

Use swap funciton to reverse a string.

*/


const arithSwap = (a, b) => {
  a = b + a
  b = a - b
  a = a - b
  return [a, b]
}

const revString = (str) => {
  
  let strArr = []
  let result = []

  // store string as an array of ascii coces 
  for( let i = 0; i < str.length; i++) {
   let ltr = str.charCodeAt(i)
   strArr.push(ltr)
  }

  let rightPtr = strArr.length - 1
  let leftPtr = 0
  
  // reverse the ascii code array 
  while( leftPtr < rightPtr ) {
    const[ newLeft, newRight] = arithSwap( strArr[leftPtr], strArr[rightPtr] )
    strArr[leftPtr] = newLeft
    strArr[rightPtr] = newRight
    leftPtr++
    rightPtr--
  } 

  // convert the ascii code array back into letters 
  for( let i = 0; i < strArr.length; i++ ) {
    let ltr = String.fromCharCode(strArr[i])
    result.push(ltr)
  }

  // join the letters array back into a strig 
  return result.join('')

}


console.log( revString('Mightily') )