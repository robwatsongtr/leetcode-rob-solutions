class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Binary_Tree:
    def __init__(self):
        self.root = None 
 
    def insert_bst(self, val):
        new_node = TreeNode(val)

        if self.root is None:
            self.root = new_node
            return self 
        
        current = self.root
        
        while True:
            if val == current.val: return None 
            if val < current.val:
                if current.left is None:
                    current.left = new_node
                    return self 
                else:
                    current = current.left
            elif val > current.val:
                if current.right is None:
                    current.right = new_node
                    return self
                else:
                    current = current.right 

    # essentially a BFS but in 'reverse' 
    def insert_balanced(self, val):
        new_node = TreeNode(val)

        if self.root is None:
            self.root = new_node
            return self 
        
        queue = []
        queue.append(self.root)

        while queue:
            curr = queue.pop(0)

            if curr.left is None:
                curr.left = new_node
                return self
            else:
                queue.append(curr.left)
                
            if curr.right is None:
                curr.right = new_node 
                return self 
            else:
                queue.append(curr.right)
                
            
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
    

    # for DFS, the 'if checks' on left and right are not strictly necessary, they are an optimization
    # than can potentially reduce the recursion depth 
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


    

if __name__ == "__main__":
    # btree = Binary_Tree()
                    
    # root = TreeNode(5,
    #     TreeNode(4, TreeNode(11, TreeNode(7), TreeNode(2)), None),
    #     TreeNode(8, TreeNode(13), TreeNode(4, None, TreeNode(1)))
    # )

    # print(f"Breadth First Search:  {btree.BFS(root)}")
    # print()
    # print(f"DFS Pre-order {btree.DFS_preorder(root)}")
    # print()
    # print(f"DFS In-order {btree.DFS_inorder(root)}")
    # print()
    # print(f"DFS Post-order {btree.DFS_postorder(root)}")
    # print()

    btree2 = Binary_Tree()
    btree3 = Binary_Tree()

    btree2.insert_bst(5).insert_bst(12).insert_bst(3).insert_bst(32).insert_bst(15)
    print(f'bfs on bst btree2: {btree2.BFS(btree2.root)}')

    btree3.insert_balanced(5).insert_balanced(12).insert_balanced(3).insert_balanced(32).insert_balanced(15)
    print(f'bfs on binary tree btree3: {btree3.BFS(btree3.root)}')