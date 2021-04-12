// watch again
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // the class arguments are the arguments of constructor.
  // but when you want to create a new class you just need to call it like functions(it depends on how you created your class)
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newValue = new Node(val);
    if (this.length === 0) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      this.tail.next = newValue;
      this.tail = newValue;
    }
    this.length += 1;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let currentNode = this.head;
    let newHead = currentNode.next;
    this.head = newHead;
    this.length--;
    if (this.length === 1) {
      this.tail = newHead;
      this.tail.next = null;
    } else if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return newHead;
  }
  unshift(value) {
    let newHead = new Node(value);
    let perviousHead = this.head;
    this.head = newHead;
    if (this.length === 0) {
      this.tail = newHead;
      this.tail.next = null;
      this.head.next = null;
    } else {
      this.head.next = perviousHead;
    }
    this.length++;
    return this;
  }
  get(number) {
    let count = 0;
    let currentNode = this.head;
    if (this.length === 0 || number > this.length || number < 0) {
      return undefined;
    }
    while (count !== number) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(number, value) {
    let currentValue = this.get(number);
    if (currentValue) {
      currentValue.val = value;
      return currentValue;
    }
    return "Not exist";
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let value = this.get(index - 1);
      let removed = value.next;
      let next = value.next.next;
      value.next = next;
      this.length--;
      return removed;
    }
    this.length--;
    return true;
  }
  reverse() {
    let currentNode;
    let nextNode;
    let count = 0;
    while (count <= this.length) {
      if (count === 0) {
        currentNode = this.head;
        this.tail = currentNode;
      }
      else{
        currentNode = nextNode;
      }
      nextNode = currentNode.next;
      count++;
    }
    return this;
  }
}

let nodeLists = new SinglyLinkedList();
nodeLists.push("Find")
nodeLists.push("your")
nodeLists.push("value")
nodeLists.push("!");
console.log("NODELIST",nodeLists);
let reverse = nodeLists.reverse();
console.log("reverse",reverse);
console.log("NODELIST",nodeLists);
