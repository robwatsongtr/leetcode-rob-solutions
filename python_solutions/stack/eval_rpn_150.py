"""
150. Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

"""

class Solution:
    def evalRPN(self, tokens) -> int:
        operators = [ '+', '-', '*', '/']
        stack = []

        def do_operations(operator, op2, op1):
            if operator == '+':
                return op1 + op2
            elif operator == '-':
                return op1 - op2
            elif operator == '*':
                return op1 * op2
            elif operator == '/':
                return int(op1 / op2)

        for token in tokens:
            # if token is an operand, push to stack
            if token not in operators:
                stack.append(int(token))
            else:
                # token is an operator, so pop off last two operands 
                # and do the operation, then push it back to stack 
                op2 = stack.pop() 
                op1 = stack.pop() 
                partial_result = do_operations(token, op2, op1)
                stack.append(partial_result)

        # last item on the stack is the final result of the expression 
        final_result = stack.pop()

        return final_result