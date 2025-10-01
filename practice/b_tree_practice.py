
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Binary_Tree:
    def __init__(self):
        self.root = None

    def DFS_preorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return
            
            result.append(node.val) # pre

            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)

        traverse(root)

        return result
    
if __name__ == "__main__":
    btree = Binary_Tree()

    root = TreeNode(4, 
        TreeNode(9, 
            TreeNode(5), TreeNode(1)),
        TreeNode(0)              
    )

    print(f'DFS: {btree.DFS_preorder(root)}')
