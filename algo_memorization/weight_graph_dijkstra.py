import pprint 
import heapq 

class WeightedGraph:
    def __init__(self):
        self.adj_list = {}

    def add_node(self, node):
        if node not in self.adj_list:
            self.adj_list[node] = []

    # storing edges and weights as a list of tuples 
    def add_edge(self, node1, node2, weight):
        if node1 not in self.adj_list:
            self.add_node(node1)
        if node2 not in self.adj_list:
            self.add_node(node2)

        self.adj_list[node1].append((node2, weight))
        self.adj_list[node2].append((node1, weight))

    def bfs(self, start_node):
        queue = []
        visited = set()
        result = []

        queue.append(start_node)
        visited.add(start_node)

        while len(queue) > 0:
            current = queue.pop(0)
            result.append(current)

            # need _ because don't forget iterating over a list of tuples 
            for neighbor, _ in self.adj_list[current]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return result 
     
    # this implementation will give the shortest distance to any other node
    # from the passed in start node: it returns a dict 
    def dijkstra_shortest(self, start):
        priority_queue = []
        distances = {}

        # set up distances map with all infinty, except starting node set to 0
        # push only the start node to the priority queue  
        for node in self.adj_list:
                distances[node] = float('inf')
        distances[start] = 0
        heapq.heappush(priority_queue, (0, start))

        while priority_queue:
            # get the smallest distance node from the minheap
            curr_distance, curr_node = heapq.heappop(priority_queue)

            # optimization: discard 'old data' about the node 
            if curr_distance > distances[curr_node]:
                continue 

            # sort of a 'bfs' through the adj list 
            for neighbor, weight in self.adj_list[curr_node]:
                dist = curr_distance + weight

                # this is the 'greedy part'. Only consider the path if its less cost 
                if dist < distances[neighbor]:
                    distances[neighbor] = dist 
                    heapq.heappush(priority_queue, (dist, neighbor))

        return distances

if __name__ == '__main__':
    g = WeightedGraph()

    g.add_node('San Rafael')
    g.add_node('Oakland')
    g.add_node('Milpitas')
    g.add_node('Santa Cruz')
    g.add_node('Sunnyvale')

    g.add_edge('San Rafael', 'Oakland', 22)
    g.add_edge('San Rafael', 'Sunnyvale', 65)
    g.add_edge('Oakland', 'Milpitas', 48)
    g.add_edge('Sunnyvale', 'Milpitas', 10)
    g.add_edge('Santa Cruz', 'Sunnyvale', 36)

    pprint.pprint(g.adj_list)
    
    print( f'BFS from San Rafael: {g.bfs('San Rafael')}' )
    print( f'Dijkstras algo from Oakland: {g.dijkstra_shortest('Oakland')}' )