"""
LC 14 Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""

Approach:
make the entire first string as the prefix.

"""


class Solution(object):
    def longestCommonPrefix(self, strs):
        if len(strs) == 0: 
            return ''

        # make the entire first string as the prefix.
        prefix = strs[0]

        for word in strs:
            while not word.startswith(prefix):
                # slice prefix by one character from the end
                prefix = prefix[:-1]

            # if 'prefix' is sliced down to nothing there is no common prefix 
            if not prefix:
                return ''
        
        return prefix

# bit shorter with return 'ternary'  
class Solution2:
    def longestCommonPrefix(self, strs) -> str:
        prefix = strs[0]

        for word in strs:
            while not word.startswith(prefix):
                prefix = prefix[:-1]

        return prefix if prefix else ''