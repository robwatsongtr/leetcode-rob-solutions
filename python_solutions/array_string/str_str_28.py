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

        # iterate one i at a time through haystack:
        # the range takes into account the length of the needle so you don't
        # go all the way to the end of the haystack, which would be inefficient
        for i in range(len(haystack) - len(needle) + 1):
            j = 0
            # inner loop will try and loop the length of needle within the haystack
            while j < len(needle) and haystack[i + j] == needle[j]:
                j += 1
            
            # if we get to the end of the needle we have a match and return 
            # the starting index 
            if j == len(needle):
                return i 

        return -1 # no match
        