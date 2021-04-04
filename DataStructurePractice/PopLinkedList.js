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
    push(val){
        let newVal = new Node(val)
        if(!this.head){
            this.head = newVal;
            this.tail = newVal;
        }
        else{
            this.tail.next = newVal;
            this.tail = newVal;
        }
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
       let current = this.head;
       let newTail;
       while(current.next){
           newTail = current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if(this.length === 0){
           this.head = null;
           this.tail = null;
       }
       return 
    }
}