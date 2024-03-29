"""
226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []

"""

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def invertTree(self, root):
        # base case, we have reached the furthest leaves of the tree
        if root is None:
            return None

        # invert, ie swap left and right nodes 
        temp = root.left 
        root.left = root.right
        root.right = temp

        # recursive calls 
        self.invertTree(root.left)
        self.invertTree(root.right)

        return root 

        
        