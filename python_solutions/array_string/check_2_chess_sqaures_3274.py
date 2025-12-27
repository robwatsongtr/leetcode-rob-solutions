"""
3274. Check if Two Chessboard Squares Have the Same Color

You are given two strings, coordinate1 and coordinate2, representing 
the coordinates of a square on an 8 x 8 chessboard.

Return true if these two squares have the same color and false otherwise.

The coordinate will always represent a valid chessboard square. 
The coordinate will always have the letter first (indicating its column), 
and the number second (indicating its row).
 
Example 1:

Input: coordinate1 = "a1", coordinate2 = "c3"
Output: true

Explanation:
Both squares are black.

Example 2:

Input: coordinate1 = "a1", coordinate2 = "h3"
Output: false

Explanation:
Square "a1" is black and "h3" is white.
"""

# personal solution
class Solution:
    def checkTwoChessboards(self, coordinate1: str, coordinate2: str) -> bool:
        # black: 
        odd_b = ['a', 'c', 'e', 'g']
        even_b = ['b', 'd', 'f', 'h']

        def is_black(coordinate):
            if coordinate[0] in odd_b and int(coordinate[1]) % 2 != 0:
                return True

            if coordinate[0] in even_b and int(coordinate[1]) % 2 == 0:
                return True 

            return False 

        # need == because will return true for true == true and false == false 
        return is_black(coordinate1) == is_black(coordinate2)


# leverages math property that if that the sum of the row and col num is even,
# it's a black square. Also don't really need a helper function.
class Solution2:
    def checkTwoChessboards(self, coordinate1: str, coordinate2: str) -> bool:
        c1_row = ord(coordinate1[0]) - ord('a')
        c1_col = int(coordinate1[1])

        c2_row = ord(coordinate2[0]) - ord('a')
        c2_col = int(coordinate2[1])

        return (c1_row + c1_col) % 2 == (c2_row + c2_col) % 2
