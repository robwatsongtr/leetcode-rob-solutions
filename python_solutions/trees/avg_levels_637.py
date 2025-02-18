"""
637. Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each level in 
the form of an array. Answers within 10-5 of the actual answer will be accepted.

"""

from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def averageOfLevels(self, root: TreeNode) -> list[float]:
        queue = deque()
        levels_avg = []

        if root is not None:
            queue.append(root)

        while len(queue) > 0:
            # this is the key, level size is the length of the queue  
            level_size = len(queue)
            level_sum = 0

            for _ in range(level_size):
                curr = queue.popleft()
                level_sum += curr.val 

                if curr.left:
                    queue.append(curr.left)

                if curr.right:
                    queue.append(curr.right)

            level_avg = level_sum / level_size
            levels_avg.append(level_avg)
        
        return levels_avg

        