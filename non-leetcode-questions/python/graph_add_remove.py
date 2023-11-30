# Basic Graph class. Add / remove node or edge

class Graph:
    def __init__(self):
        self.adjacencyList = {}

    def addNode(self, value):
        if value not in self.adjacencyList:
            self.adjacencyList[value] = []


        
    
