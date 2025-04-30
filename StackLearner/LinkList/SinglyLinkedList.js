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

        if (!this.head) {
            // if list is empty, set head to new node
            this.head = newNode;
            this.length++;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        // add new node at the end of the list
        current.next = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // if list is empty, set head to new node
            this.head = newNode;
            this.length++;
            return;
        }

        // new node points to the current head
        newNode.next = this.head;

        // head update to new node
        this.head = newNode;

        this.length++;
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
list.prepend(57);
list.prepend(60);

list.append(15); // set at last position | right side


console.log(list.toString()); // 4 -> 3 -> 2 -> 1
