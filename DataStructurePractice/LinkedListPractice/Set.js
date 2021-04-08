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
    shift(){
        if(this.length === 0){
            return undefined;
        }
        let currentNode = this.head;
        let newHead = currentNode.next;
        this.head = newHead;
        this.length--;
        if(this.length === 1){
            this.tail = newHead;
            this.tail.next = null;
        }
        else if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return newHead;
    }
    unshift(value){
        let newHead = new Node(value);
        let perviousHead = this.head;
        this.head = newHead; 
        if(this.length === 0){
           this.tail = newHead;
           this.tail.next = null;
           this.head.next = null;
        }
        else{
          this.head.next = perviousHead;
        }
        this.length++;
        return this;
    }
    get(number){
        let count = 0;
        let currentNode = this.head;
        if(this.length === 0 || number > this.length || number < 0){
            return undefined;
        }
        while(count !== number){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    set(number,value){
        let currentValue = this.get(number);
        if(currentValue){
            currentValue.val = value;
            return currentValue;
        }
        return "Not exist"
    }
  }

  let nodeLists = new SinglyLinkedList();
  nodeLists.push("Hi");
  nodeLists.push("Node");
  nodeLists.push("List");
  console.log("NODELIST",nodeLists);
  console.log( nodeLists.get(2));
  nodeLists.set(2,"KKKKKKKK")
  console.log( nodeLists.get(2));