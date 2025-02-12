"""
83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears 
only once. Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]

"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head):
        curr = head

        while curr and curr.next:
            # if duplicate, remove it 
            if curr.val == curr.next.val:
                curr.next = curr.next.next
            else:
                # otherwise, keep iterating 
                curr = curr.next 

        return head 