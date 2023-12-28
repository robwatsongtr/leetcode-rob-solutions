class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Binary_Tree:
    def BFS(self, root):
        if root is not None:
            queue = [root]

        result = []

        while len(queue) > 0:
            node = queue.pop(0)
            result.append(node.val)

            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

        return result 
    
    def DFS_preorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return 
            
            result.append(node.val)

            if node.left:
                traverse(node.left)

            if node.right:
                traverse(node.right)

        traverse(root)

        return result
    
    def DFS_inorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return
            
            if node.left:
                traverse(node.left)

            result.append(node.val)

            if node.right:
                traverse(node.right)
        
        traverse(root)

        return result
    
    def DFS_postorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return
            
            if node.left:
                traverse(node.left)

            if node.right:
                traverse(node.right)

            result.append(node.val)

        traverse(root)

        return result 



def main():
    btree = Binary_Tree()

    root = TreeNode(5,
        TreeNode(4, TreeNode(11, TreeNode(7), TreeNode(2))),
        TreeNode(8, TreeNode(13), TreeNode(4, None, TreeNode(1)))
    )

    print(btree.BFS(root))

if __name__ == "__main__":
    main()
    