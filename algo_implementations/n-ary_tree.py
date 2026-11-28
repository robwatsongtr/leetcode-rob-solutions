from collections import deque

class NryNode:
    def __init__(self, val):
        self.val = val 
        self.children = []

    def __repr__(self):
        return f"Node('{self.val}')"

    
class Nry_Tree:
    def __init__(self, root_val=None) -> None:
        self.root = None
        self.nodes = {}
        if root_val is not None:
            self.root = self.node_lookup(root_val)


    def node_lookup(self, val) -> NryNode:
        if val not in self.nodes:
            self.nodes[val] = NryNode(val)

        return self.nodes[val]

    """
    This tree loader expects parent child pairs in an array as tuples 
    """
    def make_tree(self, pairs) -> None:
        # to help find root 
        has_parent = set()

        # matching nodes and their children 
        for p, c in pairs:
            parent = self.node_lookup(p)
            child = self.node_lookup(c)

            parent.children.append(child)

            # to help find root 
            has_parent.add(c)

        # code below is to find root if one is not given in constructor
        # the root will be the only node with no parent 
        roots = [ n for n in self.nodes if n not in has_parent ]
        
        # presence of more than one node that doesn't have a parent is error 
        if len(roots) != 1: 
            raise ValueError(f'Expected exactly one root, found none or {roots}')

        found_root = self.nodes[roots[0]]

        # handle if root is given in constructor or not 
        if self.root is None:
            self.root = found_root
        elif self.root != found_root:
            raise ValueError("Derived root does not match given root.")
        

    def dfs_preorder(self) -> tuple[list[NryNode], int]:
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
    

    def dfs_postorder(self) -> tuple[list[NryNode], int]:
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
    

    # each list in the list is a complete level 
    def bfs_levels(self) -> list[list[NryNode]]:
        queue = deque()
        result = []

        if self.root is not None:
            queue.append(self.root)

        while queue: 
            # always get level size here: 
            level_size = len(queue)
            level_list = []

            for _ in range(level_size):
                node = queue.popleft()
                level_list.append(node)

                for child in node.children:
                    queue.append(child)

            result.append(level_list)
        
        return result 
    

    def height(self) -> int:
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
    

    def find(self, val) -> tuple[bool, int]:
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
    

    def collect_leaves(self) -> list[NryNode]:
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

    # finding path: backtracking with a stack 
    def find_path(self, val) -> list[NryNode] | None:
        if self.root is None:
            return False 

        path = []
        is_found = False 

        def dfs(node):
            nonlocal is_found 

            # push on stack (preorder)
            path.append(node)

            # return before the pop. keep the stack intact 
            # this current node is the target hence everthying on the stack is valid
            if node.val == val:
                is_found = True 
                return 

            # recurse 
            for child in node.children:
                dfs(child)
                # if we are on the correct path, pass that back up 
                if is_found:
                    return 

            # remove from stack (postorder).
            # No child led to target, this current node is a dead end. 
            path.pop()

        dfs(self.root)
        return path if is_found else False 


if __name__ == "__main__":
    r"""   
                 A
              /     \
            B        C
         /  |  \    /  \ 
        D   E  F    G   H
        |   |       |
        I   J       K
                  /  \
                 L    M
    """ 

    parent_child = [ 
        ('A', 'B'), ('A', 'C'), 
        ('B', 'D'), ('B', 'E'), ('B', 'F'),
        ('C','G'), ('C', 'H') ,
        ('D','I'),
        ('E','J'),
        ('G', 'K'),
        ('K', 'L'),
        ('K','M')    
    ]


    nary_tree = Nry_Tree()

    nary_tree.make_tree(parent_child)

    print(f'dfs preorder: {nary_tree.dfs_preorder()}')
    print()
    print(f'dfs postorder: {nary_tree.dfs_postorder()}')
    print()

    for i, nodes in enumerate(nary_tree.bfs_levels()):
        print(f'level: {i}, nodes: {nodes}')

    print(f'height: {nary_tree.height()}')
    print()

    val1, depth1 = nary_tree.find('H')
    print(f'Find "H": {val1}, depth: {depth1}')
    print()

    val2, depth2 = nary_tree.find('R')
    print(f'Find "R": {val2}, depth: {depth2}')
    print()

    print(f'leaf nodes: {nary_tree.collect_leaves()} ')
    print()

    print(f'Find path to M: {nary_tree.find_path('M')}')
    print()
    print(f'Find path to F: {nary_tree.find_path('F')}')
    print()
