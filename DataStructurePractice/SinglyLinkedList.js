


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(newValue){
        if(!(this.head)){
           this.head = new Node(newValue);
           this.tail = head;
        }
        else{
           this.tail = new Node(newValue);
           this.tail.next = 
        }
    }

}