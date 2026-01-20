class Set:
    def __init__(self, val=0):
        self.val = val 
        self.hashmap = {}

    def add(self, val):
        if val in self.hashmap:
            print(f' {val} already in set')
            return False 
        else:
            self.hashmap[val] = True

        return True 
    
    def remove(self, val):
        if val in self.hashmap:
            del self.hashmap[val]
            print(f'{val} removed from set.')
            return True 
        else:
            print(f'Error: {val} not found in set.')
            return False 
        
    def print_set(self):
        for values in self.hashmap.values():
            print(values, end=", ")

if __name__ == "__main__":
    new_set = Set()

    
    new_set.add('John')
    new_set.add('Barbara')
    new_set.add(5)
    new_set.add(12)
    new_set.add(1111)
    new_set.add(5) # should error
    new_set.add(12) # should error

    new_set.print_set()
    print()
    new_set.remove('Barbara')
    new_set.print_set()
    print()
    new_set.remove('34')



        
