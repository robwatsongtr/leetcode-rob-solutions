"""
LC 14

Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""

Approach:

make the entire first string as the prefix.
Each iteration shorten the prefix based on what's there in the other strings


"""


class Solution(object):
    def longestCommonPrefix(self, strs):
        