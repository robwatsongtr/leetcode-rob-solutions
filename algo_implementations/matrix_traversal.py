# matrix traversal

def row_traversal(matrix):
    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            print(matrix[row][col], end=', ')
    print()

def column_traversal(matrix):
    for col in range(len(matrix[0])):
        for row in range(len(matrix)):
            print(matrix[row][col], end=', ')
    print()

def snake_traversal(matrix):
    for row in range(len(matrix)):
        if row % 2 == 0:
            # even row traverse left to right
            for col in range(len(matrix[0])):
                print(matrix[row][col], end=', ')
        else:
            # odd row traverse right to left 
            for col in range(len(matrix[0]) - 1, - 1, - 1):
                print(matrix[row][col], end=', ')
    print()

def primary_diagonal_traversal(matrix):
    if not matrix or len(matrix[0]) != len(matrix):
        return 'ERROR: not a square matrix'
    
    # the property for the primary diagonal is that 
    # row and column are always the same: (0,0), (1,1), (2,2), etc.
    for diag_idx in range(len(matrix)):
        print(matrix[diag_idx][diag_idx], end=', ')   
    print()

def secondary_diagonal_traversal(matrix):
    if not matrix or len(matrix[0]) != len(matrix):
        return 'ERROR: not a square matrix'
    
    # row increments from 0 to len(matrix)
    # colum is calculated as len(matrix) - 1 minus the current row
    # to move 'backwards'
    for row in range(len(matrix)):
        col = len(matrix) - 1 - row
        print(matrix[row][col], end=', ')
    print()
        
if __name__ == "__main__":
    matrix1 = [
        [1,  2,  3,  4],
        [5,  6,  7,  8],
        [9,  10, 11, 12],
        [13, 14, 15, 16]
    ]

    matrix2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    matrix3 = [
        [1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ]

    print('row traversal:')
    row_traversal(matrix1)

    print('column traversal')
    column_traversal(matrix1)

    print('snake traversal')
    snake_traversal(matrix1)

    print(f'primaray diagonal traversal')
    primary_diagonal_traversal(matrix3)

    print('secondary diagonal traversal')
    secondary_diagonal_traversal(matrix3)