class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        const existing = this.#findNode(key);
        if (existing) {
            existing.value = value;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    #findNode(key) {
        if (!this.head) return null;

        let current = this.head;
        while (current) {
            if (current.key === key) return current;
            current = current.next;
        }

        return null;
    }

    find(key) {
        const node = this.#findNode(key);
        return node ? node.value : null;
    }

    *entries() {
        let current = this.head;
        while (current) {
            yield [current.key, current.value];
            current = current.next;
        }
    }
}

export default LinkedList;