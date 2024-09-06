class MatrixGraph:
    def __init__(self, matrix):
        self.matrix = matrix
        self.rows = len(matrix)
        self.cols = len(matrix[0])
        self.directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # up, down, left, right 
        self.visited = set()

    def is_within_bounds(self, row, col):
        return 0 <= row < self.rows and 0 <= col < self.cols
    
