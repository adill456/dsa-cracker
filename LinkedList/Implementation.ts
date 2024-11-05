export class ListNode {
    public value: number | string;
    public next: ListNode | null;

    constructor(value: number | string, next: ListNode | null = null) {
        this.value = value;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }


    insertAtTail(element: number | string) {
        const newNode = new ListNode(element);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    insertAtHead(element: number | string) {
        const newNode = new ListNode(element);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }


    deleteFromHead() {
        if (this.head === null) {
            console.error('List is empty');
            return;
        }
        this.head = this.head.next;
    }

    deleteFromTail() {
        let current = this.head;
        let tail = this.tail;
        while (current && current.next !== tail) {
            current = current.next;
        }

        if (current) {
            current.next = null;
            this.tail = current;
        }
    }

    search(element: number | string): number | string | null {
        let current = this.head;
        while (current) {
            if (current.value === element) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    size(): number {
        let current = this.head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}



class CircularLinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;


    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(element: number | string) {
        const newNode = new ListNode(element);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // circular link
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail!.next = this.head;
        }
    }

    insertAtTail(element: number | string) {
        const newNode = new ListNode(element);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // circular link
        }
    }
    
}