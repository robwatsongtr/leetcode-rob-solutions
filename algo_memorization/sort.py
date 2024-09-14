class Sort:
    def swap(self, list, start, end):
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
                    self.swap(list, j, j + 1)
                    swapped = True
            # no more swaps break early 
            if not swapped:
                break
        
        return list 
    
    # Selection sort scans the array for the smallest element and when found swaps it to the front 
    # of the array, swapped to the next unsorted index
    def selection_sort(self, list):
        for i in range(len(list)):
            lowest = i
            for j in range(i + 1, len(list)):
                if list[j] < list[lowest]:
                    lowest = j
            
            # The if statement ensures that you only swap when i and lowest refer to different indices.d
            if i != lowest:
                self.swap(list, i, lowest)
        
        return list 
            




if __name__ == "__main__":
    do_sort = Sort()
    arr = [5, 8, 9, 1, 2, 7, 3]

    arr_bubble_sorted = do_sort.bubble_sort(arr)
    arr_selection_sorted = do_sort.selection_sort(arr)

    print(f'bubble sorted arr: {arr_bubble_sorted}')
    print(f'selection sorted arr: {arr_selection_sorted}')
    
                



            

