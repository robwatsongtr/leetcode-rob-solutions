"""
104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

"""

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def maxDepth(self, root):
        
        def dfs(node, depth):
            if not node:
                return depth

            # must use + 1 not += 1 for counter becasue of recursion 
            left_depth = dfs(node.left, depth + 1)
            right_depth = dfs(node.right, depth + 1)

            return max(left_depth, right_depth)

        # recursive call, pass in the tree(root) and a starting counter of 0
        return dfs(root, 0) 
        
