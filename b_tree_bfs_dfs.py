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

            # this is the 'processing stage', in this case push the value into result array
            result.append(node.val)

            if node.left:
                queue.append(node.left)

            if node.right:
                queue.append(node.right)

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
    