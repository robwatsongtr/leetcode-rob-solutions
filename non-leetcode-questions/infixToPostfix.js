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

  for(const char of str) {
    if(char === ' ') {
      // whitespace is where any captured operand gets written to token array 
      if(currentToken !== '')  {
        tokens.push(currentToken)
        currentToken = ''
      }
      // operator gets written directly to token array 
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

const operators =  ['+', '-', '*', '/']

function getPrecedence(operator) {
  const precedence = {'+': 1, '-': 1, '*': 2, '/': 2}
  if( operator in precedence) {
    return precedence[operator] // return the value 
  }
  return 0
}

function createOperatorNode(val) {
  return new TreeNode(val)
}

function createOperandNode(val) {
  return new TreeNode(val)
}


function buildASTfromTokens(tokens) {
  if(!tokens) return
  let min_precedence = Infinity
  let min_index = -1

  // find the operator with the lowest precedence in tokens 
  for( let i = 0; i < tokens.length - 1; i++) {
    let token = tokens[i]
    if( operators.includes(token) ) {
      let precedence = getPrecedence(token) 
      if (precedence <= min_precedence) {
        min_precedence = precedence
        min_index = i
      }
    }
  }

  // No operators found, so operand
  if (min_index === -1) return createOperandNode(tokens[0])
 
  let operator = tokens[min_index]
  let node = createOperatorNode(operator)

  node.left = buildASTfromTokens(tokens.slice(0, min_index));
  node.right = buildASTfromTokens(tokens.slice(min_index + 1));

  return node 
}

function DFS_PostOrder(root) {
  let data = []

  function traverse(node) {
    if(!node) return []

    if(node.left) traverse(node.left) 
    if(node.right) traverse (node.right)
    data.push(node.val)
  }

  traverse(root)

  return data
}

function evalPostfixExpr(expression) {

  function doOperations(operator, operand2, operand1) {
    switch(operator) {
      case '+':
        return operand1 + operand2
      case '-':
        return operand1 - operand2
      case '/':
        return operand1 / operand2
      case '*':
        return operand1 * operand2 
    }
  }

  let operators = ['+', '-', '*', '/']
  let operandStack = []
  let tokens = tokenizeStr(expression)
  console.log('Tokenized postfix expression: ', tokens)

  for( const token of tokens ) {
    // if operand 
    if( !operators.includes(token) ) {
      operandStack.push(parseFloat(token))
    } else  {
      // hit an operator, so pop last two operands and do the math 
      const operand2 = operandStack.pop()
      const operand1 = operandStack.pop()
      const result = doOperations(token, operand2, operand1)
      // push result back onto stack
      operandStack.push(result)
    }
  }  

  // last thing left on the stack is the final result 
  const finalResult = operandStack.pop()

  return finalResult
}



function infixToPostfix(str) {
  console.log(`Original infix string:  ${str} \n`)

  const tokenizedStr = tokenizeStr(str)
  const root = buildASTfromTokens(tokenizedStr)
  console.log('Syntax Tree:')
  console.log(root)

  const postFixStr = DFS_PostOrder(root).join(' ')
  console.log(`\nPostfix string:  ${postFixStr} `)

  const evalPostfix = evalPostfixExpr(postFixStr)
  
  return evalPostfix
} 


console.log( infixToPostfix('2 * 4 + 1 * 2') )





