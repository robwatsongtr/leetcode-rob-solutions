/*
Merge two sorted linked lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. It should be noted that the head of a LL is not a node, 
but a reference

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Approach:

Itearate through both lists simultaneously. 


*/

class ListNode {
  constructor( value = null, next = null) {
    this.value = value;
    this.next = next; 
  }
}

