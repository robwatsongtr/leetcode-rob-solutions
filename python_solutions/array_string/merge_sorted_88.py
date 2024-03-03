"""
88. Merge Sorted Array
Easy

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored 
inside the array nums1. To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, and the last n 
elements are set to 0 and should be ignored. 

nums2 has a length of n.

 

"""



class Solution(object):
    def merge(self, nums1, m, nums2, n):
        p1 = m - 1  # Index for nums1
        p2 = n - 1  # Index for nums2
        i = m + n - 1  # Index for end of nums 1 including padding 0's

        while p1 >= 0 and p2 >= 0:
            if nums2[p2] > nums1[p1]:
                nums1[i] = nums2[p2]
                p2 -= 1

            else:
                nums1[i] = nums1[p1]
                p1 -= 1
                
            i -= 1

        # If there are remaining elements in nums2 and we haven't reached
        # the end of p1, copy them to nums1
        while p2 >= 0:
            nums1[i] = nums2[p2]
            p2 -= 1
            i -= 1