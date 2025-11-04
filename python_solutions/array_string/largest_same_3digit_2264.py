"""

2264. Largest 3-Same-Digit Number in String

You are given a string num representing a large integer. An integer is good if it 
meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no 
such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.
 

Example 1:

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
Example 2:

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.
Example 3:

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. 
Therefore, there are no good integers
"""

class Solution:
    def largestGoodInteger(self, num: str) -> str:
        num_to_find = 999

        for i in range(10):
            largest_int = str(num_to_find).zfill(3)

            if largest_int in num:
                return largest_int

            num_to_find -= 111

        return ''
            
class Solution2:
    def largestGoodInteger(self, num: str) -> str:
        for i in range(9, -1, -1):
            good_int = str(i) * 3

            if good_int in num:
                return good_int

        return ''