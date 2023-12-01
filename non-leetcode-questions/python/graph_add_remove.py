# Basic Graph class, for an undirected two way graph. 

class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_node(self, value):
        if value not in self.adjacency_list:
            self.adjacency_list[value] = []

    def add_edge(self, node_1, node_2):
        if node_1 not in self.adjacency_list:
            self.add_node(node_1)
        if node_2 not in self.adjacency_list:
            self.add_node(node_2)

        self.adjacency_list[node_1].append(node_2)
        self.adjacency_list[node_2].append(node_1)

    # filter out node_2 from adj list of node_1 and vice versa. 
    def remove_edge(node_1, node_2):
        adjacency_list[node_1] = [v for v in adjacency_list[node_1] if v != node_2]
        adjacency_list[node_2] = [v for v in adjacency_list[node_2] if v != node_1]



        
    
