class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.tail = null;
        this.head = null;
    }

    push(val){
        let node = new Node(val);
        if (!this.head) {
            this.tail = node;
            this.head = this.tail;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }
    pop(){
        if(this.length === 0) return undefined
        
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }
    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
}

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("boyoh");

let list = new SinglyLinkedList()
list.push("hello")
list.push(23)
list.push(47)


