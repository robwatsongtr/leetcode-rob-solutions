
class PrefixSum:
    def __init__(self, arr):
        self.arr = arr 

    def make_prefix_sum_list(self):
        result = [self.arr[0]]

        # add current value in original array to 
        # previous value in result array
        for i in range(1, len(self.arr)):
            next_val = self.arr[i] + result[i - 1]
            result.append(next_val)

        return result 
        

if __name__ == '__main__':
    list_1 = [ 1, 4, 6, 3, 9 ]

    p_sum = PrefixSum(list_1)

    # should be [ 1, 5, 11, 14, 23]

    print(f'prefix sum arr: { p_sum.make_prefix_sum_list() }')
