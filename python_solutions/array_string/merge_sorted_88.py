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
        n1p = m - 1  # Index for nums1
        n2p = n - 1  # Index for nums2
        n1end = m + n - 1  # Index for end of nums 1 including padding 0's

        while n1p >= 0 and n2p >= 0:
            if nums2[n2p] > nums1[n1p]:
                nums1[n1end] = nums2[n2p]
                n2p -= 1

            else:
                nums1[n1end] = nums1[n1p]
                n1p -= 1
                
            n1end -= 1

        # If there are remaining elements in nums2 merge the rest to nums1
        while n2p >= 0:
            nums1[n1end] = nums2[n2p]
            n2p -= 1
            n1end -= 1