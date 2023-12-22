// Find the Nth node in a singly linked list

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next) 
}


function findNthNode(head, n) {
  let current = head
  let count = 0
  while( current !== null ) {
    if( count === n ) {
      return current.val 
    }
    current = current.next
    count++
  }
  return null 
}




list = new ListNode(5);
list = new ListNode(4, list );
list = new ListNode(3, list );
list = new ListNode(2, list );
list = new ListNode(1, list );


console.log( findNthNode(list, 6))





