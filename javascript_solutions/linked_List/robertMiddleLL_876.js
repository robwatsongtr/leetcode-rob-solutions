class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

 // methods
  push(val) {
    let n = new Node(val)
    if (this.tail) {
     this.tail.next = n
    }
    this.tail = n
    if (!this.head) {
    	this.head = n
    }
    this.length++
  }

  toString() {
    let debugout = '['
    let p = this.head
    while (p !== null) {
      if (debugout.length > 1) { debugout += ',' }
      debugout += p.val
      p = p.next
    }
    debugout += ']'
    return debugout
  }

}

var l = new SinglyLinkedList()
//l.push(1)
//l.push(2)
//l.push(7)
//l.push(5)
//l.push(4)
//l.push(26)
console.log(l.toString())

function listMiddle(head) {
    let p1 = head, p2 = head
    while (p1 && p2) {
        if (p2) { p2 = p2.next } else { break }
        if (p2) { p2 = p2.next } else { break }
        if (p1) { p1 = p1.next }
    }
    return p1
}

console.log(listMiddle(l.head))