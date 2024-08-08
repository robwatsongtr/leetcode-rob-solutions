# matrix traversal

def row_traversal(matrix):
    for row in matrix:
        for element in row:
            print(element, end=' ')
    print()

def column_traversal(matrix):
    for col in range(len(matrix[0])):
        for row in range(len(matrix)):
            print(matrix[row][col], end=' ')
    print()
        
        
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


    