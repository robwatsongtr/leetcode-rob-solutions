class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Binary_Tree:
    def BFS(self, root):
        queue = []
        bfs_traversal = []

        if root is not None:
            queue.append(root)

        while len(queue) > 0:
            # remove a node from the 'front' of the queue and place its value in array
            curr_node = queue.pop(0)
            bfs_traversal.append(curr_node.val)

            # place left and / or right children of current node in the 'back of the queue 
            if curr_node.left:
                queue.append(curr_node.left)

            if curr_node.right:
                queue.append(curr_node.right)

        return bfs_traversal
    
    
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
            



