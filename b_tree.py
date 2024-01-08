class Treenode:
    def __init__ (self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class binary_tree:
    def bfs(self, root):
        queue = []
        result = []

        if root is not None:
            queue.append(root)

        while len(queue) > 0:
            current = queue.pop(0)
            result.append(current.val)

            if current.left:
                queue.append(current.left)

            if current.right:
                queue.append(current.right)

        return result 
    
    def dfs_preorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return 
            result.append(node.val)
            traverse(node.left)
            traverse(node.right)

        traverse(root)

        return result
    
    def dfs_inorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return
            
            traverse(node.left)
            result.append(node.val)
            traverse(node.right)

        traverse(root)

        return result
    
    def dfs_postorder(self, root):
        result = []

        def traverse(node):
            if node is None:
                return
            
            traverse(node.left)
            traverse(node.right)
            result.append(node.val)

        traverse(root)

        return result

if __name__ == "__main__":

    tree = Treenode( 1,  Treenode(2), Treenode(3, Treenode(12), Treenode(8) ) )
    
    btree = binary_tree()

    print(btree.bfs(tree))
    print(btree.dfs_inorder(tree))
    print(btree.dfs_postorder(tree))
    print(btree.dfs_preorder(tree))



        