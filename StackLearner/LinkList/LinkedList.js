class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add node to end of list
    append(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    // Add node to beginning of list
    prepend(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at specific position
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            return false;
        }

        if (position === 0) {
            this.prepend(data);
            return true;
        }

        if (position === this.size) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
        return true;
    }

    // Remove first occurrence of data
    remove(data) {
        if (!this.head) {
            return false;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            if (this.size === 0) {
                this.tail = null;
            }
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                if (!current.next) {
                    this.tail = current;
                }
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Remove node at specific position
    removeAt(position) {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let removedNode;
        if (position === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            removedNode = current;
            previous.next = current.next;
            if (!current.next) {
                this.tail = previous;
            }
        }

        this.size--;
        return removedNode.data;
    }

    // Get data at specific position
    get(position) {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.data;
    }

    // Check if list contains data
    contains(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Clear the list
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Get size of list
    getSize() {
        return this.size;
    }

    // Check if list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Convert list to array
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

