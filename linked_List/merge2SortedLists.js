/*
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

Also use a dummy head.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/

// because no built in linked list class in JS
class ListNode {
  constructor( val = null, next = null) {
    this.val = val;
    this.next = next; 
  }
}


var mergeTwoLists = function(list1, list2) {

  // this will traverse 
  let dummyHead = new ListNode(-1);

  // will stay -1, at the end return head.next 
  let head = dummyHead;  



    
};


console.log( mergeTwoLists( [],[]) )


  