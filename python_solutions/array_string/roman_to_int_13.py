"""
13. Roman to Integer

"""

class Solution(object):
    def romanToInt(self, s):
        roman_dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        end = s[-1]
        result = roman_dict.get(s[end])

        # len(s) - 2 is the starting point.
		# first -1 indicates that the loop should continue to beginning of string
		# second -1 indicates the loop should go backwards 
        #
        # the core logic is: if the letter to the right of the current letter 
        # is greater than curr letter, then subtract from running result. Otherwise, add.
        for i in range(len(s) - 2, -1, -1):
            if roman_dict.get(s[i+1]) > roman_dict.get(s[i]):
                result -= roman_dict.get(s[i])
            else:
                result += roman_dict.get(s[i])

        return result
    
# put curent and next into their own variables
class Solution2:
    def romanToInt(self, s: str) -> int:
        roman_map = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        result = roman_map[s[-1]]

        for i in range(len(s) - 2, -1, -1):
            curr = s[i]
            next = s[i + 1]
            
            if roman_map[next] > roman_map[curr]:
                result -= roman_map[curr]
            else:
                result += roman_map[curr]

        return result 
