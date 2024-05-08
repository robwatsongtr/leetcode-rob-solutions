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
            # if the current bracket in the string (key) has a corresponding closing bracket (value)
            if bracket in parens_dict:
                # push it to the stack 
                stack.append(bracket)
            # else, if the current bracket matches a bracket in the stack and the stack is not empty, 
            elif stack and bracket == parens_dict[stack[-1]]:
                # then pop it off the stack 
                stack.pop()
            else:
                # no matching bracket 
                return False 

        #if the stack is empty here then return true, the parens are balanced.
        return not stack

        