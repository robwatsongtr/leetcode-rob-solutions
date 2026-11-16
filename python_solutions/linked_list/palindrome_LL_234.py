"""
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:


Input: head = [1,2,2,1]
Output: true

Example 2:


Input: head = [1,2]
Output: false
  

Follow up: Could you do it in O(n) time and O(1) space?

"""

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: ListNode | None) -> bool:
        arr_dump = []
        curr = head 

        while curr is not None:
            arr_dump.append(curr.val)
            curr = curr.next 

        l = 0
        r = len(arr_dump) - 1

        while l < r:
            if arr_dump[l] != arr_dump[r]:
                return False 
            l += 1
            r -= 1

        return True 


class SolutionConstSpace:
    def isPalinrome(self, head: ListNode | None ) -> bool:
        def isPalindrome(self, head: ListNode | None) -> bool:
            #find middle:
            fast = head
            mid = head

            while fast and fast.next:
                fast = fast.next.next
                mid = mid.next

            #reverse second half
            curr = mid
            prev = None 

            while curr is not None:
                placeholder = curr.next
                curr.next = prev 
                prev = curr 
                curr = placeholder 

            # walk both halves and compare 
            second_hlf = prev
            start = head

            while second_hlf is not None:
                if second_hlf.val != start.val:
                    return False

                second_hlf = second_hlf.next
                start = start.next 

        return True 


