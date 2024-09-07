
class MatrixGraph:
    def __init__(self, matrix):
        self.matrix = matrix
        self.rows = len(matrix)
        self.cols = len(matrix[0])
        # this is how we will actually traverse, iterate through all directions
        self.directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # up, down, left, right 

    # essential to keep traversal on track and valid as you loop through the directions
    def is_within_bounds(self, row, col):
        return 0 <= row < self.rows and 0 <= col < self.cols
    
    def bfs(self, start):
        # 'preamble' before main loop same as bfs for 'free-form' graph 
        queue = []
        visited = set()
        result = []

        queue.append(start)
        visited.add(start)

        while queue:
            # since matrix we are popping out a row/col coordinate not a 'named node'
            # out of the front of the queue 
            current = queue.pop(0)
            result.append(current)
            row, col = current 

            # now loop through possible directions from current node popped out of queue 
            # to visit neighbors 
            for delta_row, delta_col in self.directions:
                new_row, new_col = delta_row + row, delta_col + col
                if self.is_within_bounds(new_row, new_col) and (new_row, new_col) not in visited:
                    visited.add((new_row, new_col))
                    queue.append((new_row, new_col))
                    
        return result 


if __name__ == '__main__':
    matrix_1 = [[1,2,3], [4,5,6], [7,8,9]]

    mat_1 = MatrixGraph(matrix_1)

    print(f'bfs traversal of matrix_1: { mat_1.bfs((2,2)) }')



