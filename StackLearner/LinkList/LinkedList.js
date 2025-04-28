class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new Node(1);

const node2 = new Node(2);
head.next = node2;

const node3 = new Node(3);
node2.next = node3;

const node4 = new Node(4);
node3.next = node4;



class LinkedList {

    static print() {

        let current = head;

        while (current) {
            current = current.next;
            console.log(JSON.stringify(current, undefined, 2));
        }
    }
}

LinkedList.print(); 