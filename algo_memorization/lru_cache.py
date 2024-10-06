"""
LRU Cache. 

A cache that keeps track of most recentely and least recently used data as 
its 'heuristic' for cache eviction. 

It leverages the strengths of two data structures working together. Using the O(1) features of a 
doubly linked list (insertion and removal at ends) with the O(1) feature of a hashtable lookup to 
randomly access nodes on the linked list. 

The nitty gritty:

While doing an insert (or PUT) we insert the element in the head of the list and record it in the hashmap. 
If element is found (GET) , we move the node to the head of the list .
When the list is full we discard the tail and update the corresponding hashmap entry as well.

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

    # Data is placed into the LRU cache. if its new data it will be put into the cache 
    # and if the cache is full oldest data will be evicted 
    def put(self, key, val):

        if key not in self.hashmap:

            # --Cache eviciton--: check if DLL is at capacity remove from dll and map
            #  DLL 'pop_back' and delete from hashmap 
            if self.length == self.capacity:
                del self.hashmap[self.tail.key] # delete from hashmap
                self.tail = self.tail.prev # move tail back by one
                if self.tail:
                    self.tail.next = None # delete last node from dll 
                else:
                    self.head = None # cache is empty 
                self.length -= 1
                
            # add node to head of DLL and add to hashmap (DLL 'push_front')
            new_lru_node = LRUNode(key, val)
            if self.head is None:
                self.head = new_lru_node
                self.tail = new_lru_node
            else:
                new_lru_node.next = self.head
                self.head.prev = new_lru_node
                self.head = new_lru_node
            # no matter what: 
            self.hashmap[key] = new_lru_node
            self.length += 1 # must be oustide if else or else wont increment on first add

        # key in hashmap, so...
        else:
            # retrieve target node from reference in hashmap
            retrieved_node = self.hashmap.get(key)
            # update value
            retrieved_node.val = val

            # remove the target node from the list (DLL 'revmove')
            if retrieved_node != self.head:
                if retrieved_node.prev:
                    # wire node before target node to one after 'forwards'
                    retrieved_node.prev.next = retrieved_node.next 
                if retrieved_node.next:
                    # wire node before target node to one after 'backwards'
                    retrieved_node.next.prev = retrieved_node.prev
            
            # move target node to head of list (MRU) (DLL 'push_front')
            if self.head is None:
                self.head = retrieved_node
                self.tail = retrieved_node
            else:
                retrieved_node.next = self.head # wire forwards
                self.head.prev = retrieved_node # wire backwards
                self.head = retrieved_node # make it new head 

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

                    




            

    
