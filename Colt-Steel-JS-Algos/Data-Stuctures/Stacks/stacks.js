// Array implementation

let stack = []
stack.push("google")
stack.push("instagram")
stack.push("youtube")

stack.pop()

// utilizing the push and pop we can remove the items easily

stack2 = []
stack2.unshift("new file")
stack.shift()

// same goes for shift and unshift but the time complexity is worse
// should use push and pop over unsift and shift

// last thing added in, first thing comes out


// can be considered a special type of linked-list
// in a stack push and pop are supposed to be constant time

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }

    push(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = this.first;
        }
        else {
            let oldFirst = this.first;
            this.first = node;
            this.first.next = oldFirst
        }
        this.size++
        return this.size
    }

    pop() {
        if(!this.first) return null
        let first = this.first
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return first.value
    }
}



