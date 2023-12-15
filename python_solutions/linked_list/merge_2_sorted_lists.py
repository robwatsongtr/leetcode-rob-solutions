"""
Leetcode 21: Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Approach:
Take the two linked lists, and link them together by changing the references of a node
to point to the next smallest item.

""""

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def mergeTwoLists(self, list1, list2):
        dummy_node = ListNode(-1)

        p1 = list1
        p2 = list2

        curr = dummy_node # the merged list 

        while p1 is not None and p2 is not None:
            if p1.val <= p2.val:
                curr.next = p1
                p1 = p1.next 
            else:
                curr.next = p2
                p2 = p2.next

            curr = curr.next 

        if p1 is not None:
            curr.next = p1

        if p2 is not None:
            curr.next = p2

        return dummy_node.next 
        
