"""
110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true

"""

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional

class Solution:
    def is_balanced(self, root: Optional[TreeNode]) -> bool:
        is_balanced = True 

        def dfs(node, depth):
            nonlocal is_balanced

            if not node:
                return depth

            left_depth = dfs(node.left, depth + 1)
            right_depth = dfs(node.right, depth + 1)

            # For balance checking, you compare the two sides...
            if abs(left_depth - right_depth) > 1:
                is_balanced = False

            # but for reporting height upward, you report the max
            # because that's the true extent of your subtree.
            return max(left_depth, right_depth)
        
        dfs(root, 0)

        return is_balanced
    


    
if __name__ == '__main__':
    sol = Solution()

    root = TreeNode(3,
        TreeNode(9),
        TreeNode(20, TreeNode(15), TreeNode(7))
    )

    root2 = TreeNode(1,
                TreeNode(2,
                    TreeNode(3,
                        TreeNode(4),
                        TreeNode(4)
                    ),  
                    TreeNode(3)
                ),
                TreeNode(2)
    )

    print( sol.is_balanced(root) )
    print( sol.is_balanced(root2) )