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

        for i in range(len(s) - 2, -1, -1):
            if roman_dict[s[i + 1]] > roman_dict[s[i]]:
                result -= roman_dict[s[i]]
            else:
                result += roman_dict[s[i]]

        return result
