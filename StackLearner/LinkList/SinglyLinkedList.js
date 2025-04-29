class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

2:34

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode; // if list is empty, set head to new node
            this.length++;
            return;
        }

        newNode.next = this.head; // new node points to the current head
        this.head = newNode; // head update to new node
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
list.prepend(13);
list.prepend(80);
list.prepend(57);
list.prepend(60);


console.log(list.toString()); // 4 -> 3 -> 2 -> 1
