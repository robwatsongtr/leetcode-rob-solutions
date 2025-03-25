"""
111. Minimum Depth of Binary Tree

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 2


Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root) -> int:
        if not root:
            return 0

        l_depth = self.minDepth(root.left) 
        r_depth = self.minDepth(root.right) 

        # edge case where you're missing a side, so the min becomes the total of the other side 
        if not root.left or not root.right:
            return l_depth + r_depth + 1

        min_depth = min(l_depth, r_depth) + 1

        return min_depth 