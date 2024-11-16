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
            # need to check if stack is empty or python will throw an index error 
            top_of_stack = stack[-1] if stack else None

            # if the current character is an opening bracket (because it matches
            # the KEY in the dictionary
            if bracket in parens_dict:
                # push the bracket to the stack
                stack.append(bracket)
            # else, 
            elif stack and bracket == parens_dict[top_of_stack]:
                # if it does pop the opening bracket off the stack 
                stack.pop()
            else:
                # # If it doesn't match or there's no opening bracket in the stack, return False.
                return False 

        #if the stack is empty here then return true, the parens are balanced.
        return not stack

#shorter:
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        parens_map = { "(":")", "[":"]","{":"}" }

        for bracket in s:
            if bracket in parens_map:
                stack.append(bracket)
            # you are comparing the lookup of **what would be expected closing bracket**
            # to the bracket you're currently reading in the loop
            # if they match, you have a closing bracket, else, something isn't balanced so afalse 
            elif stack and bracket == parens_map[stack[-1]]:
                stack.pop()
            # the else checks for improper sequencing or invalid characters,
            else:
                return False

        # checks for balance of parens 
        return not stack 
    
