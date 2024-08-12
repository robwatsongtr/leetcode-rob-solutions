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

        # the range takes into account the length of the needle so you only look 
        # up to a total length of where the needle could fit. the + 1 on len(needle) 
        # is because the python range method doesn't include the last element 
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
    
# better variable names than needle and haystack 
class Solution2(object):
    def strStr(self, haystack: str, needle: str) -> int:
        short_str = needle
        long_str = haystack

        if len(short_str) > len(long_str):
            return -1

        if not short_str:
            return 0

        for i in range(len(long_str) - len(short_str) + 1):
            j = 0
            while j < len(short_str) and long_str[i + j] == short_str[j]:
                j += 1

            if j == len(short_str):
                return i

        return -1 
        