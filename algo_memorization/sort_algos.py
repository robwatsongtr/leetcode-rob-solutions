class Sort:
    def swap(self, list, start, end):
        temp = list[start]
        list[start] = list[end]
        list[end] = temp 

    # O(n2) sorts -------------------------------------------------------------------------

    def bubble_sort(self, list):
        list_len = len(list)

        # outer for loop controls the overall process
        for outer_pass in range(list_len):
            # used for early exit if no more swaps, that means we're done sorting now 
            swapped = False
            # Inner loop compares adjacent elements and swaps them if needed.
            # The range shrinks with each outer pass because the largest elements "bubble" to the end
            for j in range(list_len - outer_pass - 1):
                if list[j] > list[j + 1]:
                    self.swap(list, j, j + 1)
                    swapped = True
            # no more swaps break early 
            if not swapped:
                break
        
        return list 
    
    # Selection sort scans the array for the lowest element in the unsorted portion.
    # When the lowest element is found, it is swapped with the element at the next unsorted index.
    def selection_sort(self, list):

        # The unsorted portion gets smaller as the sorted portion grows.
        # This loop controls the shrinking of the unsorted portion.
        for i in range(len(list)):
            # Assume the current index is the lowest.
            lowest = i

            # Scan the unsorted portion of the list to find the actual lowest element.
            for j in range(i + 1, len(list)):
                if list[j] < list[lowest]:
                    lowest = j
            
            # Swap only if the current index (i) is not the lowest index found.
            if i != lowest:
                self.swap(list, i, lowest)
        
        return list

    
    def insertion_sort(self, list):
        for i in range(1, len(list)):
            curr = list[i] # current val is saved in variable to copy back 

            j = i - 1 # start j one before i, this will be the sorted side

            # Shift elements of the sorted portion to the right until we find the correct position for curr
            while j >= 0 and list[j] > curr:
                list[j + 1] = list[j] # shift element at j to the right
                j -= 1 # move left to compare the next element
            
            # Insert curr into its correct position (just after where we stopped the while loop)
            list[j + 1] = curr

        return list 
            
    # O(nlogn) sorts --------------------------------------------------------------

    def merge_sort(self, list):
        pass     


            




if __name__ == "__main__":
    do_sort = Sort()
    arr = [5, 8, 9, 1, 2, 7, 3]

    arr_bubble_sorted = do_sort.bubble_sort(arr)
    arr_selection_sorted = do_sort.selection_sort(arr)
    arr_insertion_sorted = do_sort.insertion_sort(arr)

    print(f'bubble sorted arr: {arr_bubble_sorted}')
    print(f'selection sorted arr: {arr_selection_sorted}')
    print(f'insertion sorted arr: {arr_insertion_sorted}')
                



            

