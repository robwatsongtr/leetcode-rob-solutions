class WeightedGraph:
    def __init__(self):
        self.adj_list = {}

    # setting up the nested dict
    def add_node(self, node):
        if node not in self.adj_list:
            self.adj_list[node] = {}

    # use a nested dictionary to store the edge and weight 
    def add_edge(self, node1, node2, weight):
        if node1 not in self.adj_list:
            self.add_node(node1)
        if node2 not in self.adj_list:
            self.add_node(node2)

        self.adj_list[node1][node2] = weight
        self.adj_list[node2][node1] = weight 