class Set:
    def __init__(self, val=0):
        self.val = val 
        self.hashmap = {}

    def compute_hash(self, data):
        hashed_data = hash(data)
        return hashed_data

    def add(self, val):
        new_hash = self.compute_hash(val)
        if new_hash in self.hashmap:
            print(f' {self.hashmap[new_hash]} already in set')
            return False 
        else:
            self.hashmap[new_hash] = val 

        return True 
    
    def remove(self, val):
        rehash = self.compute_hash(val)
        if rehash in self.hashmap:
            del self.hashmap[rehash]
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



        
