"""
705. Design HashSet

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

"""

# most basic possible implementation, no hashing:
class MyHashSet:

    def __init__(self):
        self.array = []

    def add(self, key: int) -> None:
        if key not in self.array:
            self.array.append(key)
       

    def remove(self, key: int) -> None:
        if key in self.array:
            self.array.remove(key)
       

    def contains(self, key: int) -> bool:
        return key in self.array
    
# implementation with hashing

class MyHashSet2:

    def __init__(self):
        # create an array of arrays or buckets 
        self.buckets = [[] for _ in range(1000)]

    def add(self, key: int) -> None:
        idx = key % 1000
        bucket = self.buckets[idx]

        if key not in bucket:
            bucket.append(key)

    def remove(self, key: int) -> None:
        idx = key % 1000
        bucket = self.buckets[idx]

        if key in bucket:
            bucket.remove(key)
        

    def contains(self, key: int) -> bool:
        idx = key % 1000
        bucket = self.buckets[idx]

        return key in bucket