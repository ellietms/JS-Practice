// it has val , next , pervious
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList : // head , tail , length
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}


first = new Node(12)
first.next = new Node(14)
first.next.prev = new Node(12)
console.log(first)