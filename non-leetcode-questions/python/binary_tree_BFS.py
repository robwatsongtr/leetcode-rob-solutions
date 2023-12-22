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
            curr_node = queue.pop(0)
            bfs_traversal.append(curr_node.val)

            if curr_node.left:
                queue.append(curr_node.left)

            if curr_node.right:
                queue.append(curr_node.right)

        return bfs_traversal
    
def main():
    btree = Binary_Tree()

    root = TreeNode(5,
        TreeNode(4, TreeNode(11, TreeNode(7), TreeNode(2))),
        TreeNode(8, TreeNode(13), TreeNode(4, None, TreeNode(1)))
    )

    print(btree.BFS(root))

if __name__ == "__main__":
    main()
            


