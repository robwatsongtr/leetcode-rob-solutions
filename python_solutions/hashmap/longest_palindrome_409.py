"""
409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

"""

class Solution:
    def longestPalindrome(self, s: str) -> int:
        def counter(iterable):
            hashmap = {}
            for i in iterable:
                hashmap[i] = hashmap.get(i, 0) + 1
            return hashmap

        s_count = counter(s)

        length = 0
        odd = False 

        for key in s_count:
            """
            add the full count of characters with even frequencies 
            because they can form  pairs in a palindrome.
            """
            if s_count[key] % 2 == 0:
                length += s_count[key]
            else:
                """
                Odd counts: You add the largest possible even number (i.e., count - 1) 
                for characters with odd frequencies. You then keep track of whether there's 
                any odd count (to handle a potential center character in the palindrome).
                """
                odd = True
                length += s_count[key] - 1

        """
        the fact there are any odd num of characters means *you get that character as a middle character* 
        So add one to the final length 
        """
        if odd:
            length += 1

        return length 
