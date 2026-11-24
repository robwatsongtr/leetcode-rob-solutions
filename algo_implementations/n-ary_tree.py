from collections import deque

class NryNode:
    def __init__(self, val):
        self.val = val 
        self.children = []

    def __repr__(self):
        return f"Node('{self.val}')"

    

class Nry_Tree:
    def __init__(self, root_val=None):
        self.root = None
        self.nodes = {}
        if root_val is not None:
            self.root = self.node_lookup(root_val)


    def node_lookup(self, val):
        # necessary to store nodes in a dictionary to dedup 
        if val not in self.nodes:
            self.nodes[val] = NryNode(val)

        return self.nodes[val]

    """
    This tree loader expects parent child pairs in an array as tuples 
    """
    def make_tree(self, pairs):
        # to help find root 
        children = set()

        # loop for matching nodes and their children 
        for p, c in pairs:
            parent = self.node_lookup(p)
            child = self.node_lookup(c)
            parent.children.append(child)

            # to help find root 
            children.add(c)

        # code below is to find root if one is not given in constructor
        # the root will be the only node with no children
        roots = []
        for n in self.nodes:
            if n not in children:
                roots.append(n)

        # presence of more than one node that doesn't have children is error 
        if len(roots) != 1: 
            raise ValueError(f'Expected exactly one root, found none or {roots}')

        found_root = self.nodes[roots[0]]

        # handle if root is given in constructor or not 
        if self.root is None:
            self.root = found_root
        elif self.root != found_root:
            raise ValueError("Derived root does not match given root.")
        

    def dfs_preorder(self):
        if self.root is None:
            return [], 0

        result = []
        count = 0 

        def traverse(node):
            nonlocal count 

            result.append(node)

            for child in node.children:
                traverse(child)

            count += 1

        traverse(self.root)
        return result, count 

    def dfs_postorder(self):
        if self.root is None:
            return [], 0

        result = []
        count = 0

        def traverse(node):
            nonlocal count 

            for child in node.children:
                traverse(child)

            result.append(node)
            count += 1

        traverse(self.root)
        return result, count  

    def bfs(self):
        queue = deque()
        result = []

        if self.root is not None:
            queue.append(self.root)

        while queue: 
            node = queue.popleft()
            result.append(node)

            for child in node.children:
                queue.append(child)

        return result 

    def height(self):
        if self.root is None:
            return -1
        
        height = 0

        def dfs(node, curr_depth):
            nonlocal height
         
            height = max(height, curr_depth)

            for child in node.children:
                dfs(child, curr_depth + 1)

        dfs(self.root, 0)
        return height 

    def find(self, val):
        if self.root is None:
            return False, -1
        
        found_depth = -1
        is_found = False 

        def dfs(node, depth):
            nonlocal is_found, found_depth

            if node.val == val:
                is_found = True
                found_depth = depth 
                return 

            for child in node.children:
                dfs(child, depth + 1)
                # return at first find! 
                if is_found:
                    return 
            
        dfs(self.root, 0)
        return is_found, found_depth

    def collect_leaves(self):
        if self.root is None:
            return []

        leaf_nodes = []

        def dfs(node):
            if not node.children: 
                leaf_nodes.append(node)
                return 

            for child in node.children:
                dfs(child)

        dfs(self.root)
        return leaf_nodes 



if __name__ == "__main__":
    r"""   
                 A
              /     \
            B        C
         /  |  \    /  \ 
        D   E  F    G   H
        |   |       |
        I   J       K

    """ 

    parent_child = [ 
        ('A', 'B'), ('A', 'C'), 
        ('B', 'D'), ('B', 'E'), ('B', 'F'),
        ('C','G'), ('C', 'H') ,
        ('D','I'),
        ('E','J'),
        ('G', 'K')    
    ]


    nary_tree = Nry_Tree()

    nary_tree.make_tree(parent_child)

    print(f'dfs preorder: {nary_tree.dfs_preorder()}')
    print()
    print(f'dfs postorder: {nary_tree.dfs_postorder()}')
    print()
    print(f'bfs: {nary_tree.bfs()}')
    print()
    print(f'height: {nary_tree.height()}')
    print()

    val1, depth1 = nary_tree.find('H')
    print(f'Find "H": {val1}, depth: {depth1}')
    print()

    val2, depth2 = nary_tree.find('R')
    print(f'Find "R": {val2}, depth: {depth2}')
    print()

    print(f'leaf nodes: {nary_tree.collect_leaves()} ')