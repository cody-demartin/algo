
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
    shift(){
        if(!this.head) return undefined

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead
    }
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this
    }
    get(index){
        if (index < 0 || index >= this.length) return undefined
        let counter = 0;
        let node = this.head;
        while (counter !== index) {
            node = node.next
            counter++;
        }
        return node
    }
    set(index, value){
        let node = this.get(index);
        if(node){
            node.val = value;
            return true
        }
        return false
    }
    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) !!this.push(value);
        if (index === 0) !!this.unshift(value);
        let newNode = new Node(value)
        let node = this.get(index - 1);
        let oldNode = node.next;
        node.next = newNode;
        newNode.next = oldNode;
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === this.length - 1) this.pop();
        if(index === 0) this.shift();
        let node = this.get(index - 1);
        let removedNode = node.next;
        node.next = removedNode.next;
        this.length--
        return removedNode
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null;
        let next;

        for (let i = 0; i <  this.length; i++) {
            next = node.next;
            node.next = previous; 
            previous = node;
            node = next;
        }

    return this
    }
}



let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("boyoh");

let list = new SinglyLinkedList()
list.push("hello")
list.push(23)
list.push(47)


// Big O notation of common operations of Singly Linked Lists
// O(N) for removal when looking at end, O(1) for beginning
// O(N) for searching
// O(N) for accessing
// O(1) for insertion
// Singly linked lists excel at insertion and deletion vs arrays
// Foundation for stacks/queues 


