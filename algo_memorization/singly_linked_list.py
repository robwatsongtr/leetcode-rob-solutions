class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Linked_list:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push_front(self, val):
        newNode = Node(val)

        if self.head is None:
            self.head = newNode
            self.tail = self.head
        else:
            newNode.next = self.head # wire up head to new node 
            self.head = newNode # make new node the head 
        self.length += 1

        return self.head
    
    def pop_front(self):
        if self.head is None: 
            return None
        item = self.head
        self.head = self.head.next
        self.length -= 1

        if self.length == 0:
            self.tail = None 

        return item.val

    def push_back(self, val):
        newNode = Node(val)

        if self.head is None:
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode # wire up node to tail
            self.tail = newNode # make the new node the tail
        self.length += 1

        return self.head
    
    def make_sll(self, list):
        for val in list:
            self.push_back(val)

    def print_sll(self):
        curr = self.head
        while curr is not None:
            print(curr.val, end=" ")
            curr = curr.next
        print("None")

if __name__ == "__main__":
    ll = Linked_list()
    ll.make_sll([3, 2, 6, 5, 9])
    ll.print_sll()
    print(f'pop front: {ll.pop_front()}')
    ll.print_sll()
    ll.push_front('hi')
    ll.print_sll()







    