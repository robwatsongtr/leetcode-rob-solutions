import pprint 

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
    
