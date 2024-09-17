"""
222. Count Complete Tree Nodes

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled 
in a complete binary tree, and all nodes in the last level are as far left as possible.
 It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
Output: 1

Follow Up:
Design an algorithm that runs in less than O(n) time complexity.

"""

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def countNodes(self, root):
        count = 0

        def traverse(node):
            # needed for lexical scoping of count outside traverse
            nonlocal count 

            if node is None:
                return 0
            
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)

            count += 1

        traverse(root)

        return count 
    
# simpler implementation without helper dfs func
class Solution2:
    def countNodes(self, root) -> int:
        if not root:
            return 0

        l_count = self.countNodes(root.left)
        r_count = self.countNodes(root.right)

        return l_count + r_count + 1





