"""
965. Univalued Binary Tree
Solved

A binary tree is uni-valued if every node in the tree has the same value.

Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

Example 1:

Input: root = [1,1,1,1,1,null,1]
Output: true

Example 2:

Input: root = [2,2,2,5,2]
Output: false
 
"""

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# flag difference in traversal from node before 
class Solution:
    def isUnivalTree(self, root: TreeNode | None) -> bool:
        prev = None
        is_univalued = True 

        def dfs(node):
            nonlocal prev  
            nonlocal is_univalued
            
            if node is None:
                return 

            if node.left:
                dfs(node.left)
            
            if prev and prev.val != node.val:
                is_univalued = False

            prev = node 

            if node.right:
                dfs(node.right)

        dfs(root)

        return is_univalued 

# simpler solution. Just compare to root. 
class Solution2:
    def isUnivalTree(self, root: TreeNode | None) -> bool:
        isUnival = True

        def dfs(node):
            nonlocal isUnival 
            if not node: return

            if node.left:
                dfs(node.left)

            if node.val != root.val:
                isUnival = False 

            if node.right:
                dfs(node.right)

        dfs(root)

        return isUnival 
