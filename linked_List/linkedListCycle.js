/*
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be 
reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects 
to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.



*/

const util = require('util')

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const node1 = new ListNode(3)
const node2 = new ListNode(2)
const node3 = new ListNode(0)
const node4 = new ListNode(-4) 

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2 // cycle back to node2

// console.log(util.inspect(node1, { depth: null }))

// TORTOISE AND HARE ALGO / FAST AND SLOW POINTERS 

var hasCycle = function(head) {
  if (!head || !head.next) {
    return false; // No cycle if there are 0 or 1 nodes
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;      // Move one step at a time
    fast = fast.next.next; // Move two steps at a time
      
    if (slow === fast) {
      return true; // If they meet, there is a cycle
    }
  }

  return false; // If fast reaches the end, there is no cycle
};

console.log( hasCycle(node1) )