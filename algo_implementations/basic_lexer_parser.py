from enum import Enum, auto

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
        self.type = token_type
        self.lexeme = lexeme 

    def __repr__(self):
        return f"Token(token_type='{self.type}', lexeme='{self.lexeme}')"

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

class Parser:
    def __init__(self, token_stream):
        self.tok_stream = token_stream
        self.tok_pos = 0

    def advance(self):
        self.tok_pos += 1

    def token_peek(self):
        token = self.tok_stream[self.tok_pos]
        return token if token.TokenType != 'EOF' else None 


    def consume(self):
        pass





if __name__ == '__main__':

    # Test lexer: 
    lexer = Lexer('345 * 444 +  (9345 / 234)')
    tokens = lexer.tokenize()
    
    for token in tokens:
        print(token)


