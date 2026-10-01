"""
3798. Largest Even Number

You are given a string s consisting only of the characters '1' and '2'.

You may delete any number of characters from s without changing the order 
of the remaining characters.

Return the largest possible resultant string that represents an even integer. 
If there is no such string, return the empty string "".

 

Example 1:

Input: s = "1112"

Output: "1112"

Explanation:

The string already represents the largest possible even number, so no deletions are needed.


Example 2:

Input: s = "221"

Output: "22"

Explanation:

Deleting '1' results in the largest possible even number which is equal to 22.


Example 3:

Input: s = "1"

Output: ""

Explanation:

There is no way to get an even number.
"""

# best solution, slicing 
class Solution:
    def largestEven(self, s: str) -> str:
        for i in range(len(s) - 1, -1, -1):
            if s[i] == '2':
                return s[:i + 1]
        return ''


# my solution, not as clean and efficient, using pop, but still basically O(n)
class Solution2:
    def largestEven(self, s: str) -> str:
        s_list = list(s)

        for i in range(len(s) - 1, -1, -1):
            if s[i] == '2':
                break
            else:
                s_list.pop()

        return "".join(s_list)