class Graph:
    def __init__(self):
        # keeps track of the connections between nodes in a dictionary
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

    # filter out node_2 from adj list of node_1 and vice versa.
    def remove_edge(self, node_1, node_2):
        self.adjacency_list[node_1] = [v for v in self.adjacency_list[node_1] if v != node_2]
        self.adjacency_list[node_2] = [v for v in self.adjacency_list[node_2] if v != node_1]

    def remove_node(self, node):
        if node not in self.adjacency_list:
            return

        while len(self.adjacency_list[node]) > 0:
            adjacent_node = self.adjacency_list[node].pop()
            self.remove_edge(node, adjacent_node)

        del self.adjacency_list[node]

    def depth_first_search(self, start_node, visited=None):
        # dfs finds a group of connected nodes 
        graph_group = []

        # ask gpt about the if statement
        if visited is None:
            visited = set()

        def dfs(node):
            # base case
            if not node:
                return None

            visited.add(node)
            graph_group.append(node) 

            if node in self.adjacency_list: 
                # loop through and visit neighbors recursively
                for neighbor in self.adjacency_list[node]:
                    if neighbor not in visited:
                        dfs(neighbor)

        dfs(start_node)  # kick off the recursion

        return graph_group

    # to get all groups you need to perform DFS’s (or BFS’s) across the entire graph / 
    # adjacency list. If you keep track of all visited, then you simply just keep searching 
    # across anything that’s left unvisited because after a search those nodes are by 
    # definition not connected to the last graph you just searched
    def find_groups(self):
        graph = self.adjacency_list
        graph_groups = []
        visited = set()
        
        # perform a dfs on each UNVISITED node and gather it all up into a group  
        for node in graph:
            if node not in visited:
                group = self.depth_first_search(node, visited=visited)
                graph_groups.append(group)
        
        return graph_groups 

    def breadth_first_search(self, start_node):
        if start_node not in self.adjacency_list:
            raise ValueError(f"Node {start_node} not found.")        

        queue = []
        graph_group = []
        visited = set()

        # push the starting node onto the queue and mark it as visited
        queue.append(start_node)
        visited.add(start_node)

        while len(queue) > 0:
            # dequeue the front of queue and push it into the group array
            current = queue.pop(0)
            graph_group.append(current)

            for neighbor in self.adjacency_list.get(current, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return graph_group


if __name__ == '__main__':
    g = Graph()

    g.add_node("New York")
    g.add_node("Madrid")
    g.add_node("Berlin")
    g.add_node("Dehli")
    g.add_node("Stockholm")
    g.add_node("Prague")

    g.add_node("Phoenix")
    g.add_node("Atlanta")
    g.add_node("Chicago")
    g.add_node("Sacramento")
    
    # group 1 
    g.add_edge("New York", "Madrid")
    g.add_edge("New York", "Berlin")
    g.add_edge("New York", "Dehli")
    g.add_edge("Dehli", "Madrid")
    g.add_edge("Madrid", "Berlin")
    g.add_edge("Berlin", "Stockholm")
    g.add_edge("Dehli", "Prague")

    # group 2
    g.add_edge("Sacramento", "Chicago")
    g.add_edge("Sacramento", "Phoenix")
    g.add_edge("Chicago", "Atlanta")

    print("Adjacency List")
    print(g.adjacency_list)
    print()
    print("All groups:")
    print(g.find_groups())

    # g.remove_node("Dehli")

    # print()
    # print("Removed Dehli")
    # print(g.adjacency_list)

    print()
    print("Depth first search group 1")
    print(g.depth_first_search("Berlin"))
    print()
    print("Breadth first search group 1")
    print(g.breadth_first_search("Berlin"))
    print()
    print("Depth first search group 2")
    print(g.depth_first_search("Sacramento"))
    print()
    print("Breadth first search group 2")
    print(g.breadth_first_search("Sacramento"))