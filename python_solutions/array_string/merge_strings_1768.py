"""
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in 
alternating order, starting with word1. If a string is longer than the other, append 
the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

"""



class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        p1 = 0
        p2 = 0
        result = []

        while p1 < len(word1) and p2 < len(word2):
            result.append(word1[p1])
            result.append(word2[p2])
            p1 += 1
            p2 += 1

        result.append(word1[p1:])
        result.append(word2[p2:])

        return "".join(result)