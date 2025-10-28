"""
415. Add Strings

Given two non-negative integers, num1 and num2 represented as string, return 
the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling 
large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
"""

import sys
sys.set_int_max_str_digits(0) 

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        num1_int = 0
        for num in num1:
            digit = ord(num) - ord('0')
            num1_int = num1_int * 10 + digit

        num2_int = 0
        for num in num2:
            digit = ord(num) - ord('0')
            num2_int = num2_int * 10 + digit

        return str(num1_int + num2_int)