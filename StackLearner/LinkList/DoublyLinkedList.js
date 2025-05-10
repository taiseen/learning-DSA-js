class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    remove(data) {
        if (!this.head) {
            return false;
        }

        let current = this.head;

        while (current) {
            if (current.data !== data) {
                current = current.next;
                continue;
            }

            if (current === this.head && current === this.tail) {
                this.head = null;
                this.tail = null;
                this.size--;
                return true;
            }

            if (current === this.head) {
                this.head = current.next;
                this.head.prev = null;
                this.size--;
                return true;
            }

            if (current === this.tail) {
                this.tail = current.prev;
                this.tail.next = null;
                this.size--;
                return true;
            }

            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.size--;
            return true;
        }

        return false;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}

