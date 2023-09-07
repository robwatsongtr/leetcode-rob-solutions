/* 

Shunting Yard Algorithm:

1. Initialize two stacks: one for operators and another for output (the postfix expression).

2. Scan the infix expression from left to right, token by token.

3. For each token:
  If it is an operand (number or variable), add it to the output.
  If it is an operator:
    While there are operators on the operator stack with greater or equal precedence and the operator is left-associative, 
      pop them from the operator stack and add them to the output.
    Push the current operator onto the operator stack.
//
  
4. If the token is an open parenthesis '(', push it onto the operator stack.

5. If the token is a closing parenthesis ')':
  Pop operators from the operator stack and add them to the output until an open parenthesis '(' is encountered and removed from the operator stack.
  Discard the open parenthesis from the operator stack.
//

6. After processing all tokens, pop any remaining operators from the operator stack and add 
  them to the output.
//

The output stack now contains the postfix expression.

*/

function tokenizeStr(str) {
  let tokens = []
  let currentToken = ''
  let operators = ['+', '-', '*', '/']

  for(char of str) {
    if(char === ' ') {
      // whitespace is where any captured operand gets written to token array 
      if(currentToken !== '')  {
        tokens.push(currentToken)
        currentToken = ''
      }
      // operator gets writtend directly to token array 
    } else if(operators.includes(char)) {
      tokens.push(char);
      currentToken = ''; 
      // not whitespace or operator, its an operand so...
    } else {
      currentToken += char;
    }
  }

  // needed for last token 
  if( currentToken !== '') tokens.push(currentToken)

  return tokens
}

function infixToPostfix(tokens) {

  
}