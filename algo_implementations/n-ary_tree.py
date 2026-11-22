from collections import deque

class NryNode:
    def __init__(self, val):
        self.val = val 
        self.children = []

class Nary_Tree:
    def __init__(self, root_val=None):
        self.root = None
        self.nodes = {}
        if root_val is not None:
            self.root = self.node_lookup(root_val)


    def node_lookup(self, val):
        if val not in self.nodes:
            self.nodes[val] = NryNode(val)

        return self.nodes[val]

    def make_tree(self, pairs):
        children = set()

        for p, c in pairs:
            parent = self.node_lookup(p)
            child = self.node_lookup(c)
            parent.children.append(child)

            # to help find root 
            children.add(c)

        roots = []
        for n in self.nodes:
            if n not in children:
                roots.append(n)

        if len(roots) != 1: 
            raise ValueError(f'Expected exactly one root, found none or {roots}')

        found_root = self.nodes[roots[0]]

        if self.root is None:
            self.root = found_root
        elif self.root != found_root:
            raise ValueError("Derived root does not match given root.")
        

    def dfs_preorder(self):
        if self.root is None:
            return []

        result = []

        def traverse(node):
            result.append(node.val)

            for child in node.children:
                traverse(child)

        traverse(self.root)
        return result 

    def dfs_postorder(self):
        if self.root is None:
            return []

        result = []

        def traverse(node):
            for child in node.children:
                traverse(child)

            result.append(node.val)

        traverse(self.root)
        return result 

    def bfs(self):
        queue = deque()
        result = []

        if self.root is not None:
            queue.append(self.root)

        while queue: 
            node = queue.popleft()
            result.append(node.val)

            for child in node.children:
                queue.append(child)

        return result 


if __name__ == "__main__":
    """   
                 A
              /     \
            B        C
         /  |  \    /  \ 
        D   E  F    G   H
        |           |
        I           J

    """ 

    parent_child = [ 
        ('A', 'B'), ('A', 'C'), 
        ('B', 'D'), ('B', 'E'), ('B', 'F'),
        ('C','G'), ('C', 'H') ,
        ('D','I'),
        ('G', 'J')    
    ]


    nary_tree = Nary_Tree()

    nary_tree.make_tree(parent_child)

    print(f'dfs preorder: {nary_tree.dfs_preorder()}')
    print()
    print(f'dfs postorder: {nary_tree.dfs_postorder()}')
    print()
    print(f'bfs: {nary_tree.bfs()}')
    print()

