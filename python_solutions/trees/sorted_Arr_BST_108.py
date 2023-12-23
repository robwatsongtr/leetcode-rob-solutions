"""
108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, 
convert it to a height-balanced binary search tree.

"""

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sortedArrayToBST(self, nums: list[int]) -> TreeNode:
        # base case is we're down to an empty array 
        if not nums:
            return None
        
        middle = len(nums) // 2

        root = TreeNode(nums[middle])

        # need the + 1 on right side to not include a duplicate of the middle 
        root.left = self.sortedArrayToBST(nums[:middle])
        root.right = self.sortedArrayToBST(nums[middle + 1:])

        return root 