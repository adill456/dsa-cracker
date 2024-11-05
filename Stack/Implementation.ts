import { ListNode } from "../LinkedList/Implementation";
class Stack {
    private stack: number[];
    private top: number = -1;
    private maxSize: number;

    constructor(size: number = 1000) {
        this.maxSize = size;
        this.stack = Array(this.maxSize);
    }

    push(element: number): void {
        if (this.top === this.maxSize - 1) {
            console.error('Stack is full');
        }
        this.top++;
        this.stack[this.top] = element;
    }

    pop(): number | undefined {
        if (this.top === -1) {
            console.error('Stack is empty');
            return undefined;
        }

        const element = this.stack[this.top];
        this.top--;
        return element;
    }
    peek() {
        if (this.top === -1) {
            console.error('Stack is empty');
            return undefined;
        }
        return this.stack[this.top];
    }
    isEmpty() {
        return this.top === -1; // true if empty, false if not
    }
    size() {
        return this.top + 1; // returns the number of elements in the stack
    }
}

//  Implemenetation of Stack using linked list (Oct 29, 2024)
class StackWithLinkedList {
    private top: ListNode | null;

    constructor() {
        this.top = null;
    }

    push(element: number | string) {
        const newNode = new ListNode(element);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(): number | string | null {
        if (this.top === null) {
            console.error('Stack is empty');
            return null;
        }
        const element = this.top.value;
        this.top = this.top.next;  // Update top to remove the popped node
        return element;

    }
    peek() {
        if (this.top === null) {
            console.error('Stack is empty');
            return null;
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    size() {
        let count = 0;
        let current = this.top;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}


const stack = new StackWithLinkedList()

for (let i = 1; i <= 10; i++) {
    stack.push(i);
}

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());