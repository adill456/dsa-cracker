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