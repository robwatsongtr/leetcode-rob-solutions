/*
Robert's Homework:

Take an expression in standard algebraic notation (e.g. 1 + 2 * 3) and generate 
a RPN string that corresponds. 

The RPN string should, of course, evaluate properly.

So looks like I would first need to tokenize the algebraic infix expression, 
then run it through the 'shunting yard' algorithm to convert to postfix 

TOKENIZE INPUT STRING 

CREATE AN ABSTRACT SYNTAX TREE FROM TOKENS

PERFORM A POSTFIX DFS ON THE TREE 

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


class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const op_precednce = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

function buildASTfromStr(str) {

  let tokenizedStr = tokenizeStr(str)

  return tokenizedStr
}





