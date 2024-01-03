"""
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

"""

class Solution:
    def addBinary(self, a: str, b: str) -> str:

        def pad_with_zeros(input_str, length):
            for _ in range(len(input_str), length):
                input_str = '0' + input_str

            return input_str

        str_max_length = max(len(a), len(b))

        bstring_1 = pad_with_zeros(a, str_max_length)
        bstring_2 = pad_with_zeros(b, str_max_length)

        carry = 0
        result = ""

        for i in range(str_max_length - 1, -1, -1):
            bit1 = int(bstring_1[i], 2)
            bit2 = int(bstring_2[i], 2)

            current_sum = bit1 + bit2 + carry

            # ensures 0 or 1 by modding by 2 taking out the carry 
            result = str(current_sum % 2) + result 

            # calculates carry for the next higher bit 
            carry = current_sum // 2

        if carry:
            result = "1" + result 

        return result 

        
        
        


