"""

You are given a 0-indexed array of positive integers w where w[i] describes the 
weight of the ith index.

You need to implement the function pickIndex(), which randomly picks an index 
in the range [0, w.length - 1] (inclusive) and returns it. The probability of 
picking an index i is w[i] / sum(w).

For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 
(i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).
"""

import random 
from typing import List

class Solution:


    def __init__(self, w: List[int]):
        self.weights = w
        self.prefix_sums = [self.weights[0]]

        for i in range(1, len(self.weights)):
            next_sum = self.weights[i] + self.prefix_sums[i - 1]
            self.prefix_sums.append(next_sum)

    def pickIndex(self) -> int:
        random_pick = random.randrange(0, self.prefix_sums[-1])
    
        l = 0
        r = len(self.prefix_sums) - 1
        
        while l <= r:
            mid = (l + r) // 2
            
            if self.prefix_sums[mid] <= random_pick:
                l = mid + 1
            else:
                r = mid - 1
        
        return l