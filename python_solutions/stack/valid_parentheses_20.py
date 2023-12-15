# Valid Parentheses LC 20 


class Solution(object):
    def isValid(self, s):
        stack = []
        parens_dict = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        for bracket in s:
            if bracket in parens_dict:
                stack.append(bracket)
            elif stack and bracket == parens_dict[stack[-1]]:
                stack.pop()
            else:
                return False 

        return not stack

        