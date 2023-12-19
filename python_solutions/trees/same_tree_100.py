"""
100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they
are the same or not.

Two binary trees are considered the same if they are structurally identical, 
and the nodes have the same value.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: True

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: False

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: False
"""


class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def isSameTree(self, p, q):
        # you've reached the deepest leaves of both trees and didn't trip the false cases. SAME
        if p is None and q is None:
            return True

        # one tree has a node where the other doesnt, NOT SAME
        if not p or not q:
            return False

        # one tree has a node value that doesn't match the other tree, so NOT SAME
        if p.val != q.val:
            return False


        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)