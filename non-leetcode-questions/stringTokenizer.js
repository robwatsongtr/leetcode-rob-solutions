// Basic Strign Tokenizing function 

// Uses whitespace as a delimiter, and has either an operator or operand token
// (i.e. this tokenizer is a basic tokenizer for math without parens)

function tokenizeStr(str) {

  let tokens = []
  let currentToken = ''
  let operators = ['+', '-', '*', '/']

  for(char of str) {

    // if current character in loop variable is a whitespace ...
    if(char === ' ') {

      // If currentToken is not empty, it means you've collected a complete token, 
      if(currentToken !== '')  {

        // so add it to the tokens array
        tokens.push(currentToken)
        
        // reset currentToken 
        currentToken = ''
      }

    // else if character is an operator 
    } else if(operators.includes(char)) {

      // Add the operator as a separate token,
      tokens.push(char);

      // Reset currentToken
      currentToken = ''; 

      // ok so not whitespace or operator, its an operand so...
    } else {

      // Append the operand to currentToken
      currentToken += char;

    }
  }

  // There's gonna be one last token left in there...
  if( currentToken !== '') tokens.push(currentToken)

  return tokens

}


console.log( tokenizeStr(`1 + 2 * 3`) )