import pprint 
import heapq 

class WeightedGraph:
    def __init__(self):
        self.adj_list = {}

    # setting up the nested dict
    def add_node(self, node):
        if node not in self.adj_list:
            self.adj_list[node] = []

    # use a nested dictionary to store the edge and weight 
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

            for neighbor in self.adj_list:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return result 
     
    def dijkstra_shortest(self, start, finish):
        priority_queue = []
        distances = {}
        previous = {}

        for node in self.adj_list:
            if node == start:
                distances[node] = 0
                heapq.heappush( priority_queue,(node, 0) )
            else:
                distances[node] = float('inf')
                heapq.heappush( priority_queue, (node, float('inf')) )
 

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
    
    pprint.pprint(f'BFS from San Rafael: {g.bfs('San Rafael')}')