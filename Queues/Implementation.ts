import { ListNode } from "../LinkedList/Implementation";
class Queue {
    private queue: number[] = [];
    private front: number = 0;
    private rear: number = -1;
    private maxSize: number;

    constructor(size: number = 1000) {
        this.maxSize = size;
        this.queue = Array(this.maxSize);
    }

    enqueue(element: number) {
        if (this.rear === this.maxSize - 1) {
            console.error('Queue is full');
            return;
        }
        this.rear++;
        this.queue[this.rear] = element;
    }
    dequeue(): number | undefined {
        if (this.rear < this.front) {
            console.error('Queue is empty');
            return undefined;
        }

        const element = this.queue[this.front];
        this.front++;

        if (this.rear < this.front) {
            this.front = 0;
            this.rear = -1;
        }
        return element;
    }
    frontElement(): number | undefined {
        if (this.rear < this.front) {
            console.error('Queue is empty');
            return undefined;
        }
        return this.queue[this.front];
    }
    rearElement(): number | undefined {
        if (this.rear < this.front) {
            console.error('Queue is empty');
            return undefined;
        }
        return this.queue[this.rear];
    }
    isEmpty() {
        return this.rear < this.front;
    }
    isFull() {
        return this.rear === this.maxSize - 1;
    }
    size() {
        return this.rear - this.front + 1;
    }
}

class CircularQueue {

    private queue: number[] = [];
    private front: number = 0;
    private rear: number = -1;
    private maxSize: number;

    constructor(size: number = 1000) {
        this.maxSize = size;
        this.queue = Array(this.maxSize);
    }

    enqueue(element: number) {
        if ((this.rear === this.maxSize - 1 && this.front === 0) || (this.rear === this.front - 1)) {
            console.error('Queue is full');
            return;
        }
        this.rear = (this.rear + 1) % this.maxSize;
        this.queue[this.rear] = element;
    }

    dequeue(): number | undefined {
        if (this.front === this.rear) {
            console.error('Queue is empty');
            return undefined;
        }
        const element = this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        return element;
    }

    frontElement(): number | undefined {
        if (this.front === this.rear) {
            console.error('Queue is empty');
            return undefined;
        }
        return this.queue[this.front];
    }
    rearElement(): number | undefined {
        if (this.front === this.rear) {
            console.error('Queue is empty');
            return undefined;
        }
        return this.queue[this.rear];
    }
    isEmpty() {
        return this.front === this.rear;
    }
    isFull() {
        return (this.rear === this.maxSize - 1 && this.front === 0) || (this.rear === this.front - 1);
    }
    size() {
        return (this.maxSize - this.front + this.rear + 1) % this.maxSize;
    }
}

class QueueWithLinkedList {
    private front: ListNode | null;
    private rear: ListNode | null;

    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(element: number | string) {
        const newNode = new ListNode(element);

        if (this.rear === null) {
            this.front = newNode; // this is compulsory for the dequeue method
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode; // update rear
        }
    }

    dequeue(): number | string | null {
        if (this.front === null) {
            console.error('Queue is empty');
            return null;
        }
        const element = this.front.value;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return element;
    }

    printQueue() {
        let current = this.front;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }
    }
}

const queue = new QueueWithLinkedList()

for (let i = 1; i <= 5; i++) {
    queue.enqueue(i);
}

queue.printQueue();