"""
101. Symmetric Tree


Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).

"""
# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def isSymmetric(self, root):
        
        def isMirror(left, right):
            # we have reached the furthest leaves and didnt fail the tests so is symmetric 
            if left is None and right is None:
                return True

            # one side has a left or right node but not the other 
            if left is None or right is None:
                return False

            # one side's value is different than the other 
            if left.val != right.val:
                return False 

            # check the symmetry of the subtrees rooted at pairs of nodes
            return isMirror(left.left, right.right) and isMirror(left.right, right.left)

        return isMirror(root.left, root.right)

