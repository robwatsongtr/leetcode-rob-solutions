/*

LC 66 Plus One

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.


3 cases to consider. Probably can implement in an if - else if - else 

simplest: last digit of the array is not a 9. Just incremet the digit

if last digit of array is a 9, then you increment the digit to the left of the 9 and 
and you change the 9 to a zero.

finally, if the [0] digit is 9 make a new array that starts with a 1 and has an
extra zero in it at the end. 



*/



var plusOne = function(digits) {



    
};