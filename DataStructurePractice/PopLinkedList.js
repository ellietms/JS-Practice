class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // the class arguments are the arguments of constructor.but when you want to create a new class you just need to call it like functions(it depends on how you created your class) 
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
    } 
    else {
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
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return currentNode;
  }
}

let nodeLists = new SinglyLinkedList();
console.log("1",nodeLists);
nodeLists.push("ellie");
nodeLists.push("How are");
nodeLists.push("you");
nodeLists.push("this");
nodeLists.push("evening");
console.log("final",nodeLists);

nodeLists.pop();
nodeLists.pop();
nodeLists.pop();
console.log("pop results",nodeLists);