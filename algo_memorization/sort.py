class Sort:
    def swap_helper(self, list, start, end):
        temp = list[start]
        list[start] = list[end]
        list[end] = temp 

    def bubble_sort(self, list):
        list_len = len(list)

        # outer for loop controls the overall process
        for outer_pass in range(list_len):
            # used for early exit if no more swaps, that means we're done sorting now 
            swapped = False
            # Inner loop compares adjacent elements and swaps them if needed.
            # The range shrinks with each outer pass because the largest elements "bubble" to the end.
            for j in range(list_len - outer_pass - 1):
                if list[j] > list[j + 1]:
                    self.swap_helper(list, j, j + 1)
                    swapped = True
            # no more swaps break early 
            if not swapped:
                break
        
        return list 
            

if __name__ == "__main__":
    arr = [5, 8, 9, 1, 2, 7, 3]

    arr_sorted = Sort().bubble_sort(arr)

    print(f'sorted arr: {arr_sorted}')
    
                



            

