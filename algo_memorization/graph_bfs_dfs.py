class Graph:
    def __init__(self) -> None:
        self.adjacency_list = {}

    def add_node(self, node):
        if node not in self.adjacency_list:
            self.adjacency_list[node] = []

    def add_edge(self, node_1, node_2):
        if node_1 not in self.adjacency_list:
            self.add_node(node_1)
        if node_2 not in self.adjacency_list:
            self.add_node(node_2)

        self.adjacency_list[node_1].append(node_2)
        self.adjacency_list[node_2].append(node_1)

    def bfs(self, start_node):
        if start_node not in self.adjacency_list:
            raise ValueError(f"Node '{start_node}' not found")
        
        queue = []
        result = []
        visited = set()

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
    
    # process the nodes "on the way down" the call stack recursion 
    def dfs_preorder(self, start_node, visited=None):
        if start_node not in self.adjacency_list:
            raise ValueError(f"Node '{start_node}' Not found")

        if visited is None:
            visited = set()

        result = []

        def traverse(node):
            if node not in self.adjacency_list:
                return None
            
            visited.add(node) # needs to be outside loop or else duplicates 
            result.append(node)

            for neighbor in self.adjacency_list.get(node, []):
                if neighbor not in visited:
                    traverse(neighbor)

        traverse(start_node)

        return result 
    
    # process the nodes "on the way up" the call stack recursion 
    def dfs_postorder(self, start_node, visited=None):
        if start_node not in self.adjacency_list:        
            raise ValueError(f'Node ${start_node} not found')
        
        if visited is None:
            visited = set()

        result = []

        def traverse(node):
            if node not in self.adjacency_list:
                return None
            
            visited.add(node)

            for neighbor in self.adjacency_list.get(node, []):
                if neighbor not in visited:
                    traverse(neighbor)
            
            result.append(node)

        traverse(start_node)

        return result 

if __name__ == '__main__':
    g = Graph()

    g.add_node("New York")
    g.add_node("Madrid")
    g.add_node("Berlin")
    g.add_node("Delhi")
    g.add_node("Stockholm")
    g.add_node("Prague")

    g.add_edge("New York", "Madrid")
    g.add_edge("New York", "Berlin")
    g.add_edge("New York", "Delhi")
    g.add_edge("Delhi", "Madrid")
    g.add_edge("Madrid", "Berlin")
    g.add_edge("Berlin", "Stockholm")
    g.add_edge("Delhi", "Prague")

    print("Adjacency List")
    print(g.adjacency_list)
    print()

    try:
        print(f"BFS from Berlin:  {g.bfs('Berlin')}")
        print(f"BFS from Prague:  {g.bfs('Prague')}")
        print(f"DFS from Berlin:  {g.dfs('Berlin')}")
        print(f"DFS from Prague:  {g.dfs('Prague')}")
    except ValueError as e:
        print(e) 