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
    
    def dfs(self, start_node, visited=None):
        result = []

        if visited is None:
            visited = set()

        def traverse(node):
            if node is None:
                return 
            
            visited.add(node)
            result.append(node)

            for neighbor in self.adjacency_list.get(node, []):
                if neighbor not in visited:
                    traverse(neighbor)

        traverse(start_node)

        return result 
    

if __name__ == "__main__":

    g = Graph()

    g.add_node("A")
    g.add_node("B")
    g.add_node("C")
    g.add_node("D")
    g.add_node("E")

    g.add_edge_undirected("A", "B")
    g.add_edge_undirected("A", "C")
    g.add_edge_undirected("B", "E")
    g.add_edge_undirected("B", "D")
    g.add_edge_undirected("D", "E")

    print(g.adjacency_list)
    print(f"BFS from E: { g.bfs("E") }")
    print(f"DFS from E: { g.dfs("E") }")



    


    

    

