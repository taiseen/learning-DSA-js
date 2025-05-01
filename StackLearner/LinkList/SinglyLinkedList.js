class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        this.length++;

        if (!this.head) {
            // if list is empty, set head to new node
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            // run to the end of the list by this loop
            current = current.next; // ✅ loop running steps
        }

        // add new node at the end of the list
        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.length++;

        if (!this.head) {
            // if list is empty, set head to new node
            this.head = newNode;
            return;
        }

        // new node points to the current head
        newNode.next = this.head;

        // head reference info updated by this new node
        this.head = newNode;
    }


    insertAt(index, value) {

        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        this.length++;

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current; // keep track of the previous node
            current = current.next; // ✅ loop running steps
            count++;
        }

        newNode.next = current; // new node points to the current node
        previous.next = newNode;
    }
    
    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            const arrow = current.next ? ' -> ' : '';
            result += current.value + arrow;
            current = current.next;
        }
        return result;
    }
}

const list = new SinglyLinkedList();
list.prepend(13); // set at first position | left side
list.prepend(80);
list.prepend(60);

list.append(15); // set at last position | right side
list.append(20);
list.append(25);

list.insertAt(0, 1000); // set at first position | left side
list.insertAt(list.length, 5000); // set at last position | right side

list.insertAt(3, 4444); // set at middle position | right side

console.log(list.toString()); // 4 -> 3 -> 2 -> 1
console.log(list.length);

// 2:50