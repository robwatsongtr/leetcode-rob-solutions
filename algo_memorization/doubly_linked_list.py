class Node:
    def __init__(self, val=0, next=None, prev=None):
        self.val = val
        self.next = next
        self.prev = prev

class Doubly_linked_list:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push_front(self, val):
        newNode = Node(val)

        if self.head is None:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head # wire forwards
            self.head.prev = newNode # wire backwards
            self.head = newNode # make it the new head 
        self.length += 1

        return self.head
    
    # so in a dll we have to temporarily store the head to update the pointers, 
    # while in an SLL you just disconnect the head
    def pop_front(self):
        if self.head is None:
            return None
        
        # temporarily store the head 
        old_head = self.head

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = old_head.next # update what will be new head to next node 
            self.head.prev = None # disconnect the new head from old head 
            old_head.next = None # disconnect old head from new head 
        self.length -= 1

        return old_head # old head has the item 

    
    def push_back(self, val):
        newNode = Node(val)

        if self.head is None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode # wire forwards
            newNode.prev = self.tail # wire backwards
            self.tail = newNode # make new tail 
        self.length += 1

        return self.head
    
   