"""
200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

"""

class Solution:
    def numIslands(self, grid):
        rows = len(grid)
        cols = len(grid[0])
        directions = [(-1, 0), (1,0), (0, -1), (0, 1)] # up, down, left, right
        visited = set()

        def is_inbounds(row, col):
            return 0 <= row < rows and 0 <= col < cols

        # used to explore the island to its boundaries
        def dfs(start):
            row, col = start
            visited.add(start)

            for delta_r, delta_c in directions:
                new_r, new_c = delta_r + row, delta_c + col
                if (
                    is_inbounds(new_r, new_c) 
                    and (new_r, new_c) not in visited 
                    and grid[new_r][new_c] == '1'
                ):
                    dfs((new_r, new_c))

        # find the start of an island and increment number of islands 
        # in this case we just need as simple nested for loop that will invoke
        # a dfs if the start of an island is found 
        num_islands = 0
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == '1' and (row, col) not in visited:
                    num_islands += 1
                    dfs((row,col))

        return num_islands


        




        
