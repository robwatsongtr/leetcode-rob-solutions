"""
LRU Cache v2

Split out linked list operations into their own methods 

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
        
    def remove_dll_node(self, node):
        retrieved_node = node
        # remove the target node from the list (DLL 'revmove')
        if retrieved_node != self.head:
            if retrieved_node.prev:
                # wire node before target node to one after 'forwards'
                retrieved_node.prev.next = retrieved_node.next 
            if retrieved_node.next:
                # wire node before target node to one after 'backwards'
                retrieved_node.next.prev = retrieved_node.prev


    def move_to_head(self, node):
        retrieved_node = node
        if self.head is None:
                self.head = retrieved_node
                self.tail = retrieved_node
        else:
            retrieved_node.next = self.head # wire forwards
            self.head.prev = retrieved_node # wire backwards

    def evict_cache(self):
        #  DLL 'pop_back' and delete from hashmap 
        del self.hashmap[self.tail.key] # delete from hashmap
        self.tail = self.tail.prev # move tail back by one
        if self.tail:
            self.tail.next = None # delete last node from dll 
        else:
            self.head = None # cache is empty 
        self.length -= 1
        

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
            retrieved_node = self.hashmap.get(key)
            retrieved_node.val = val # update value
            self.remove_dll_node(retrieved_node) # remove from list 
            self.move_to_head(retrieved_node) # make MRU 

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

                    




            

    
