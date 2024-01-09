class Graph:
    def __init__(self) -> None:
        self.adjacency_list = {}

    def add_node(self, node):
        if node not in self.adjacency_list:
            self.adjacency_list[node] = []

    def add_edge_undirected(self, node_1, node_2):
        if node_1 not in self.adjacency_list:
            self.add_node(node_1)

        if node_2 not in self.adjacency_list:
            self.add_node(node_2)

        self.adjacency_list[node_1].append(node_2)
        self.adjacency_list[node_2].append(node_1)

    def bfs(self, start_node):
        queue = []
        result = []
        visited = set()

        queue.append(start_node)
        visited.add(start_node)
    
        while len(queue):
            curr_node = queue.pop(0)
            result.append(curr_node)

            for neighbor in self.adjacency_list.get(curr_node, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return result 