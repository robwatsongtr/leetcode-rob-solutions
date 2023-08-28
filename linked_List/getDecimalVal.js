/*

Working with (singly) linked lists in Leetcode  

*/


//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


const sll1 = new ListNode(1, new ListNode(0, new ListNode(1, new ListNode(1, null))));

// console.log(sll1)


const getDecimalVal = (listNode) => {
  let str = ''
   while( listNode !== null) {
    str += listNode.val
    listNode = listNode.next
   }
  return parseInt(str, 2) 
}

console.log( getDecimalVal(sll1) )