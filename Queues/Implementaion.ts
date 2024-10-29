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
        if (this.front > this.rear) {
            console.error('Queue is empty');
            return undefined;
        }

        const element = this.queue[this.front];
        this.front++;

        if (this.front > this.rear) {
            this.front = 0;
            this.rear = -1;
        }
        return element;
    }
    frontElement(): number | undefined {
        if (this.front > this.rear) {
            console.error('Queue is empty');
            return undefined;
        }
        return this.queue[this.front];
    }
    rearElement(): number | undefined {
        if (this.front > this.rear) {
            console.error('Queue is empty');
            return undefined;
        }
        return this.queue[this.rear];
    }
    isEmpty() {
        return this.front > this.rear;
    }
    isFull() {
        return this.rear === this.maxSize - 1;
    }
    size() {
        return this.rear - this.front + 1;
    }
}

// class CircularQueu {

// }