# implement a stack using a dictionary 


class Stack_dict:
    def __init__ (self):
        self.items = {}
        self.top = 0

    def push(self, item):
        self.items[self.top] = item
        self.top += 1

    def pop(self):
        if self.top == 0:
            return None 
        self.top -= 1

        item = self.items[self.top]

        del self.items[self.top]

        return item[1]
    

        
