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

        end = len(s) - 1
        result = roman_dict[s[end]]

		# first -1 indicates that the loop should continue to beginning of string
		# second -1 indicates the loop should go backwards 
        # the core logic is: if the letter to the right of the current letter 
        # is greater, then subtract from running result. Otherwise, add.
        for i in range(len(s) - 2, -1, -1):
            if roman_dict[s[i + 1]] > roman_dict[s[i]]:
                result -= roman_dict[s[i]]
            else:
                result += roman_dict[s[i]]

        return result
