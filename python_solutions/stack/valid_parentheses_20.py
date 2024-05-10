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
            # if the current character is an opening bracket 
            if bracket in parens_dict:
                # push it to the stack 
                stack.append(bracket)
            # else, if the current character is a closing bracket, check if it matches the most recent
            # opening bracket on the stack 
            elif stack and bracket == parens_dict[stack[-1]]:
                # if it does pop the opening bracket off the stack 
                stack.pop()
            else:
                # # If it doesn't match or there's no opening bracket in the stack, return False.
                return False 

        #if the stack is empty here then return true, the parens are balanced.
        return not stack

        