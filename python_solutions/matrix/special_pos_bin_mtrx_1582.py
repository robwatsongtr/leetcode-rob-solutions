"""
1582. Special Positions in a Binary Matrix

Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in 
row i and column j are 0 (rows and columns are 0-indexed).

 
Example 1:

Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other 
elements in row 1 and column 2 are 0.

Example 2:


Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.

"""

class Solution:
    def numSpecial(self, mat: list[list[int]]) -> int:
        ones = []
        ans = 0

        for r in range(len(mat)):
            for c in range(len(mat[0])):
                if mat[r][c] == 1:
                    ones.append([r,c])

        def checker(r, c):
            flag = True  

            r_total = sum(mat[r])
            if r_total > 1: 
                flag = False 
            
            c_total = sum(mat[i][c] for i in range(len(mat)))

            if c_total > 1:
                flag = False 
                    
            return flag 

        for r, c in ones: 
            is_special = checker(r, c)

            if is_special:
                ans += 1

        return ans 