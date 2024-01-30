

class Graph:
    def __init__ (self):
        self.adjacency_list = {}

    def add_node(self, node):
        self.adjacency_list[node] = []

    def add_edge(self, node_1, node_2):
        if node_1 not in self.adjacency_list:
            self.add_node[node_1]

        if node_2 not in self.adjacency_list:
            self.add_node[node_2]

        self.adjacency_list[node_1].append(node_2)
        self.adjacency_list[node_2].append(node_1)

    def graph_bfs(self, start_node):
        result = []
        visited = set()
        queue = []

        queue.append(start_node)
        visited.add(start_node)

        while len(queue) > 0:
            current = queue.pop(0)
            result.append(current)
             
            for neighbor in self.adjacency_list.get(current, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return result 
    
    def graph_dfs(self, start_node):
        result = []
        visited = set()

        def traverse(node):
            if not node:
                return
            
            result.append(node)
            visited.add(node)

            for neighbor in self.adjacency_list.get(node, []):
                if neighbor not in visited:
                    traverse(neighbor)

        traverse(start_node)

        return result 
