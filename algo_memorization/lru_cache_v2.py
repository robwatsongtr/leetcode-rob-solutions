"""
LRU Cache v2

"""

class LRUNode:
    def __init__(self, key = '', val=0, next=None, prev=None):
        self.key = key 
        self.val = val
        self.next = next
        self.prev = prev

class LRUCache:
    def __init__(self, capacity):
        self.hashmap = {}
        self.head = None # most recently used
        self.tail = None # least recently used 
        self.capacity = capacity 
        self.length = 0

    def add_dll_node(self, node):
        new_lru_node = node
        if self.head is None:
            self.head = new_lru_node
            self.tail = new_lru_node
        else:
            new_lru_node.next = self.head
            self.head.prev = new_lru_node
            self.head = new_lru_node
            new_lru_node.prev = None
        
    # remove the target node from the list (DLL 'remove')
    def remove_dll_node(self, node):
        target_node = node
        if target_node != self.head:
            # wire node before target node to one after 'forwards'
            target_node.prev.next = target_node.next 
            # wire node after target node to one before 'backwards'
            target_node.next.prev = target_node.prev
        else:
            # if target node is head 
            self.head = self.head.next
            # edge case: if there's only one node left
            if self.head:
                self.head.prev = None

        # handle case if the target node is the tail
        if target_node == self.tail:
            self.tail = self.tail.prev
            if self.tail:
                self.tail.next = None

    def move_to_head(self, node):
        self.remove_dll_node(node)
        self.add_dll_node(node)

    def evict_cache(self):
        least_used_node = self.tail
        if least_used_node:
            del self.hashmap[least_used_node.key]
            self.remove_dll_node(least_used_node)
            self.length -= 1
        
    # ** this is the core logic of the cache ***
    def put(self, key, val):
        if key not in self.hashmap:
            # --Cache eviciton--: check if DLL is at capacity remove from dll and map
            if self.length == self.capacity:
                self.evict_cache()

            # add node to head of DLL and add to hashmap (DLL 'push_front')
            new_lru_node = LRUNode(key, val)
            self.add_dll_node(new_lru_node) # add node to head of DLL
            self.hashmap[key] = new_lru_node
            self.length += 1 
        else:
            # retrieve target node from reference in hashmap
            existing_node = self.hashmap.get(key)
            existing_node.val = val # update value
            self.move_to_head(existing_node) # make MRU 

    def get(self, key):
        if key in self.hashmap:
            retrieved_node = self.hashmap.get(key)
            self.put(key, retrieved_node.val)
            return retrieved_node.val
    
        return -1 
    
    def print(self):
        current = self.head
        while current is not None:
            print(f"key {current.key}: value {current.val}")
            current = current.next

if __name__ == "__main__":
    cache = LRUCache(3)
    cache.put("a", 1)
    cache.put("b", 2)
    cache.put("c", 3)

    print(cache.get("b"))

    cache.put("d",4)

    cache.print()      

                    




            

    
