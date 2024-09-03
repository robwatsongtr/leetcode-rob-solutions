class MatrixGraph:
    def __init__(self, matrix):
        self.matrix = matrix
        self.rows = len(matrix)
        self.colums = len(matrix[0])
        self.directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]