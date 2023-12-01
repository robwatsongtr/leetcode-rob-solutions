# Basic Graph class, for an undirected two way graph. 
# Add / remove node or edge

class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def add_node(self, value):
        if value not in self.adjacency_list:
            self.adjacency_list[value] = []

    def add_edge(self, node_1, node_2):
        


        
    
