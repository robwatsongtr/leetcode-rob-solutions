"""
Leetcode 28, implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

-haystack is an input string

-needle is a contiguous substring that is being searched for in 
the haystack. 

"""

class Solution(object):
    def strStr(self, haystack, needle):
        if not needle:
            return 0

        if len(needle) > len(haystack):
            return -1 

        for i in range(len(haystack) - len(needle) + 1):
            j = 0
            while j < len(needle) and haystack[i + j] == needle[j]:
                j += 1
            
            if j == len(needle):
                return i 

        return -1
        