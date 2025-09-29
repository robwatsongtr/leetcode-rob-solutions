from collections import Counter

class PrefixSum:
    def __init__(self, arr):
        self.arr = arr 

    def make_prefix_sum_list(self):
        result = [self.arr[0]]

        # add current value in ORIGINAL array to 
        # previous value in PREFIX SUM array
        for i in range(1, len(self.arr)):
            next_val = self.arr[i] + result[i - 1]
            result.append(next_val)

        return result 
    
    def range_sum(self, l, r):
        p_sum_arr = self.make_prefix_sum_list()
        range_sum = p_sum_arr[r] - p_sum_arr[l - 1]

        return range_sum
    
    
if __name__ == '__main__':
    list_1 = [ 1, 4, 6, 3, 9 ]

    p_sum = PrefixSum(list_1)

    # should be [ 1, 5, 11, 14, 23]

    print(f'original array: {list_1}')
    print(f'prefix sum arr: { p_sum.make_prefix_sum_list() }')
    print (f'sum of original array from idx 1 to 3: { p_sum.range_sum(1, 3) }')

