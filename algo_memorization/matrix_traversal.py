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
            for col in range(len(matrix[0])):
                print(matrix[row][col], end=', ')
        else:
            for col in range(len(matrix[0]) - 1, - 1, - 1):
                print(matrix[row][col], end=', ')
        
        
if __name__ == "__main__":
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    print('row traversal:')
    row_traversal(matrix)

    print('column traversal')
    column_traversal(matrix)

    print('snake traversal')
    snake_traversal(matrix)

    