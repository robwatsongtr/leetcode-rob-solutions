"""
1791. Find Center of Star Graph

There is an undirected star graph consisting of n nodes labeled from 1 to n. 
A star graph is a graph where there is one center node and exactly n - 1 
edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] 
indicates that there is an edge between the nodes ui and vi. 
Return the center of the given star graph.
 
Example 1:

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is c
onnected to every other node, so 2 is the center.

Example 2:

Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1

"""

# MY SOLUTIONS ARE GENERAL. If you're guaranteed to have a star graph in the input
# then you only need to check the first two nested arrays since each nested array will
# always have one of the two elements be the same. 

from typing import List

class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        all_nodes = []
        for x, y in edges:
            all_nodes.append(x)
            all_nodes.append(y)

        for node in all_nodes:
            if all_nodes.count(node) == len(all_nodes) // 2:
                return node 

# O(1) solution 
class Solution2:
    def findCenter(self, edges: List[List[int]]) -> int:
        all_nodes = []
        for x, y in edges:
            all_nodes.append(x)
            all_nodes.append(y)

        print(all_nodes)

        node_freq = {}

        for node in all_nodes:
            node_freq[node] = node_freq.get(node, 0) + 1

        print(node_freq)

        for key in node_freq:
            if node_freq[key] == len(all_nodes) // 2: 
                return key
        
            
if __name__ == '__main__':
    sol = Solution()
    sol2 = Solution2()

    edges = [[1,2],[5,1],[1,3],[1,4]]


    print(sol.findCenter(edges)) 
    print(sol2.findCenter(edges)) 