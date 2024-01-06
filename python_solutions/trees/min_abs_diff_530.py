"""
530. Minimum Absolute Difference in BST

Given the root of a Binary Search Tree (BST), return the minimum absolute
difference between the values of any two different nodes in the tree.

"""


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        min_diff = float('inf')
        prev_val = None

        def traverse_inorder(node):
            nonlocal min_diff
            nonlocal prev_val

            if node.left:
                traverse_inorder(node.left)

            if prev_val is not None:
                min_diff = min(min_diff, abs(node.val - prev_val))

            prev_val = node.val

            if node.right:
                traverse_inorder(node.right)

        traverse_inorder(root)

        return min_diff