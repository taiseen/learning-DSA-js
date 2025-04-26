class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const head = new Node(1);

const second = new Node(2);
head.next = second;

const third = new Node(3);
second.next = third;



class LinkedList {

    static print() {

        let current = head;

        while (current) {
            console.log(JSON.stringify(current.value, undefined, 2));
            current = current.next;
        }
    }
}

LinkedList.print(); 