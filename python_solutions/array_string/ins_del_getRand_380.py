"""
380. Insert Delete GetRandom O(1)

Implement the RandomizedSet class:
RandomizedSet() Initializes the RandomizedSet object.
-bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, 
false otherwise.
-bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, 
false otherwise.
-int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least 
one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

"""

import random 

class RandomizedSet:

    def __init__(self):
        self.hashmap = {}
        self.array = []

    
    # check for existence for set-ness, then add the new value and its 
    # index to a hashmap for later lookup. Since we are appending to the end of the array
    # the hashmap has the value then whatever the current index is for the end of the array.
    def insert(self, val: int) -> bool:
        if val not in self.hashmap:
            self.array.append(val)
            self.hashmap[val] = len(self.array) - 1
            return True
        return False 
    
    # get the last index of the array
    # get the value to remove's index
    # get value of last entry in array
    # swap the value with the last value in array 
    # update index of last element that got swapped in hashmap to the old index of the val being removed 
    # remove from array and hashmap
    def remove(self, val_to_remove: int) -> bool:
        if val_to_remove in self.hashmap:
            last_idx = len(self.array) - 1
            val_idx = self.hashmap[val_to_remove]
            last_val = self.array[last_idx]

            self.array[val_idx], self.array[last_idx] = self.array[last_idx], self.array[val_idx]
            
            self.hashmap[last_val] = val_idx
            self.array.pop()
            del self.hashmap[val_to_remove]
            return True
        
        return False 
    
    def getRandom(self):
        return random.choice(self.array)
          

# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()