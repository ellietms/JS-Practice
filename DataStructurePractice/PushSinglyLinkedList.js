class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// let newNode = new Node("ellie");
// newNode.next = new Node("is great");
// newNode.next.next = new Node("believe me");
// console.log(newNode)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newValue = new Node(val)
        if(!this.head){
            this.head = newValue;
            this.tail = this.head;
        }
        else{
            this.tail.next = newValue;
            this.tail = newValue;
        }
        this.length += 1;
    }
}

let list =new SinglyLinkedList();
list.push("peach");
list.push("berry");
list.push("carrot");
list.push("banana");
list.push("grape");
list.push("strawberry");

console.log("list",list);
console.log("Next",list.head.next.next.next.next.next);
