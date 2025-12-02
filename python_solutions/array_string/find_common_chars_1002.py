"""


"""

from typing import List 
from collections import Counter

class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        common_freq = Counter(words[0])
        result = []

        for word in words[1:]:
            curr_freq = Counter(word)

            for char in list(common_freq.keys()):
                if char in curr_freq:
                    common_freq[char] = min(common_freq[char], curr_freq[char])
                else:
                    del common_freq[char]

        for char in common_freq:
            for _ in range(common_freq[char]):
                result.append(char)

        return result 
        
class Solution2:
    def commonChars(self, words: List[str]) -> List[str]:
        # first word is baseline for comparison 
        common = Counter(words[0])

        for word in words[1:]:
            # set intersection of what letters are common 
            # TAKES THE MIN COUNT OF DUPLICATES
            common &= Counter(word)

        # elements() is a Counter method that returns an iterator yielding 
        # each element repeated by its count. It expands out the duplicates. 
        return list(common.elements())


if __name__ == '__main__':
    sol = Solution()

    words = ["bella","label","roller"]

    print(sol.commonChars(words))


