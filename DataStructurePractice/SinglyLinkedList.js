

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(newNode){
        if(this.head === null){
            head = newNode;
            tail = newNode;
            length = 1;
        }
        else{
            tail = newNode;
            length += 1;
        }
    }

}