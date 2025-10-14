"""
3545. Minimum Deletions for At Most K Distinct Characters

You are given a string s consisting of lowercase English letters, and an integer k.

Your task is to delete some (possibly none) of the characters in the string so that t
he number of distinct characters in the resulting string is at most k.

Return the minimum number of deletions required to achieve this.

Example 1:

Input: s = "abc", k = 2

Output: 1

Explanation:

s has three distinct characters: 'a', 'b' and 'c', each with a frequency of 1.
Since we can have at most k = 2 distinct characters, remove all occurrences of any 
one character from the string.
For example, removing all occurrences of 'c' results in at most k distinct characters. 
Thus, the answer is 1.

Example 2:

Input: s = "aabb", k = 2

Output: 0

Explanation:

s has two distinct characters ('a' and 'b') with frequencies of 2 and 2, respectively.
Since we can have at most k = 2 distinct characters, no deletions are required. 
Thus, the answer is 0.

Example 3:

Input: s = "yyyzz", k = 1

Output: 2

Explanation:

s has two distinct characters ('y' and 'z') with frequencies of 3 and 2, respectively.
Since we can have at most k = 1 distinct character, remove all occurrences of any one character from the string.
Removing all 'z' results in at most k distinct characters. Thus, the answer is 2.

"""

class Solution:
    def minDeletion(self, s: str, k: int) -> int:
        freq_map = {}
        for i in range(len(s)):
            freq_map[s[i]] = freq_map.get(s[i], 0) + 1

        sorted_tuples = sorted(freq_map.items(), key=lambda item: item[1])

        d = len(freq_map) - k
        if d <= 0: return 0

        sliced_tuples = sorted_tuples[:d]

        min_deletions = sum([item[1] for item in sliced_tuples])

        return min_deletions




if __name__ == "__main__":
    sol = Solution()

    s = "aabb"
    k = 2

    print(sol.minDeletion(s, k))


