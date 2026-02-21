from enum import Enum, auto

"""
Lexer
"""

class TokenType(Enum):
    NUMBER = auto()
    PLUS = auto()
    MINUS = auto()
    MULTIPLY = auto()
    DIVIDE = auto()
    L_PARENS = auto()
    R_PARENS = auto()
    EOF = auto()


class Token:
    def __init__(self, lexeme, token_type):
        self.token_type = token_type
        self.lexeme = lexeme 

    def __repr__(self):
        return f"Token(token_type='{self.token_type}', lexeme='{self.lexeme}')"
    
        
class Lexer:
    def __init__(self, stream):
        self.stream = stream
        self.pos = 0 

    char_map = {
        '+' : TokenType.PLUS,
        '-' : TokenType.MINUS,
        '*' : TokenType.MULTIPLY,
        '/' : TokenType.DIVIDE,
        '(' : TokenType.L_PARENS,
        ')' : TokenType.R_PARENS
    }

    def advance(self):
        self.pos += 1
    
    def peek(self):
        if self.pos < len(self.stream): 
            return self.stream[self.pos]
        else:
            return None # reached end of input 
        
    def tokenize(self):
        tokens = []

        while True:
            # EOF
            if self.peek() is None:
                token = Token("", TokenType.EOF)
                tokens.append(token)

                # we're done!
                return tokens
            
            # handle whitespace
            elif self.peek() == ' ':
                self.advance()

            # handle arithmetic operands or parens
            elif self.peek() in self.char_map:
                t_type = self.char_map.get(self.peek())
                lexeme = self.peek()
                token = Token(lexeme, t_type)
                tokens.append(token)
                self.advance()

            # handle numbers 
            elif self.peek().isdigit():
                digits = ''

                while self.peek() is not None and self.peek().isdigit(): 
                    digits += self.peek()
                    self.advance()

                token = Token(digits, TokenType.NUMBER)
                tokens.append(token)
                # no self.advance() needed because already in loop 

            else:
                raise ValueError(
                    f"Unexpected character(s) starting with '{self.peek()}' at {self.pos}"
                )

"""
Parser
"""

class BinaryOpNode:
    def __init__(self, op_type=None, l_op=None, r_op=None):
        self.op_type = op_type
        self.l_op = l_op
        self.r_op = r_op


class NumberNode:
    def __init__(self, number=0):
        self.number = number 


class Parser:
    def __init__(self, token_stream):
        self.tok_stream = token_stream
        self.tok_pos = 0

    def advance(self):
        self.tok_pos += 1

    def token_peek(self):
        token = self.tok_stream[self.tok_pos]

        return token if token.token_type != TokenType.EOF else None 

    def consume(self, expected_token):
        token = self.token_peek()

        if token.token_type == expected_token:
            self.advance()

            return token 
        else:
            raise ValueError(
                f"Unexpected token '{token.token_type}' at {self.tok_pos}"
            )

    # ------------ Build the Parse Tree ------------

    """
    expression → term
        term       → factor (('+' | '-') factor)*
        factor     → primary (('*' | '/') primary)*
        primary    → NUMBER | '(' expression ')'    
    """

    def expression(self):
        root = self.term()

        return root  

    def term(self):
        root = self.factor()

        while self.token_peek() and (
            self.token_peek().token_type in (TokenType.PLUS, TokenType.MINUS)
        ):
            op = self.token_peek()
            self.consume(op.token_type) # does validation and advances
            r_node = self.factor()
            root = BinaryOpNode(op, root, r_node)

        return root 

        
    def factor(self):
        root = self.primary()

        while self.token_peek() and (
            self.token_peek().token_type in (TokenType.MULTIPLY, TokenType.DIVIDE)
        ):
            op = self.token_peek()
            self.consume(op.token_type) 
            r_node = self.primary()
            root = BinaryOpNode(op, root, r_node)

        return root 


    def primary(self):
        if self.token_peek().token_type == TokenType.NUMBER:
            num = self.token_peek()
            self.consume(num.token_type)

            return NumberNode(float(num.lexeme))
        else:
            # handle parens, creating a nested parse of everything inside them
            if self.token_peek().token_type == TokenType.L_PARENS:
                self.consume(TokenType.L_PARENS)
                result = self.expression()
                self.consume(TokenType.R_PARENS)

                return result

    # -------------------------------------------------

    def evaluate(self):
        pass 






if __name__ == '__main__':

    # Test lexer: 
    lexer = Lexer('345 * 444 +  (9345 / 234)')
    tokens = lexer.tokenize()
    
    for token in tokens:
        print(token)


