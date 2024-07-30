"""
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a 
cycle which does not include 1.Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
 2   2
1 + 9 = 82

 2   2
8 + 2 = 68

 2   2 
6 + 8 = 100

 2   2   2
1 + 0 + 0 = 1

Example 2:

Input: n = 2
Output: false

"""

class Solution(object):
    def isHappy(self, n):
        hashmap = {}
        
        # if the cycle hits 1 we exit loop and its happy
        while n != 1:
            # if the sum of squre of digits repeats itself at all it's not happy 
            if n in hashmap:
                return False

            # we use a hashmap to keep track of previous iterations 
            hashmap[n] = -1
            # generator expression produces the sum of squared digits on the fly 
            n = sum(int(digit) ** 2 for digit in str(n)) 

        return True 
        