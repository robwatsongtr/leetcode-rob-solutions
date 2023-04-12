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
  constructor( val = null, next = null) {
    this.val = val;
    this.next = next; 
  }
}

const mergeTwoLists = (l1, l2) => {
  const dummy = new ListNode(-1)
  let prev = dummy

  while ( l1 && l2 )  {
    if( l1.val <= l2.val ) {
      prev.next = l1
      prev = l1;
      l1 = l1.next
    } else {
      prev.next = l2
      prev = l2
      l2 = l2.next
    }
  }
  
  if(!l1) prev.next = l2
  if(!l2) prev.next = l1

  return dummy.next 

}

console.log( mergeTwoLists( [1,2,4], [1,3,4] ))