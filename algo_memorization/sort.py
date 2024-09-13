class Sort:
    def swap_helper(self, list, start, end):
        temp = list[start]
        list[start] = list[end]
        list[end] = temp 

    def bubble_sort(self, list):
        for i in range(len(list) - 1, -1, -1):
            j = 0
            

