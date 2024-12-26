"""
515. Find Largest Value in Each Tree Row

Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

Example 1:

Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
Example 2:

Input: root = [1,2,3]
Output: [1,3]

"""

from collections import deque

class Solution:
    def largestValues(self, root):
        queue = deque()
        largest_vals = []

        if root is not None:
            queue.append(root)

        while queue:
            row_len = len(queue)
            largest_val = float('-inf')

            for _ in range(row_len):
                curr = queue.popleft()
                largest_val = max(curr.val, largest_val)

                if curr.left:
                    queue.append(curr.left)  
                if curr.right:
                    queue.append(curr.right)

            largest_vals.append(largest_val) 

        return largest_vals 