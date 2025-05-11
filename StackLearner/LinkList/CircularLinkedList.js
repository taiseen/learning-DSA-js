class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        const newNode = new Node(data);
        this.size++;

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // 🔄️ create circular link
            return;
        }

        // if the list is not empty...
        let current = this.head;
        // this time not null checking...
        // end there by founding that where is next === head...
        // so for running this loop we have to check like this !==
        // so traverse the list until you find the head...
        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.head; // 🔄️ create circular link
    }

    remove(data) {
        //  early return if list is empty
        if (!this.head) {
            return false;
        }

        let current = this.head;
        let prev = null;

        // Handle case where data is in head node
        if (current.data === data) {
            if (this.size === 1) {
                this.head = null;
            } else {
                // Find last node to update its next pointer
                let last = this.head;
                while (last.next !== this.head) { // head checking...
                    last = last.next;
                }
                this.head = this.head.next;
                last.next = this.head; // 🔄️ create circular link
            }
            this.size--;
            return true;
        }

        // Search for data in other nodes
        do {
            prev = current; // node update
            current = current.next; // node update
            if (current.data === data) {
                prev.next = current.next; // link update
                this.size--;
                return true;
            }
        } while (current !== this.head); // head checking...

        return false;
    }
}