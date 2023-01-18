// 19 - Jan - 2023

//  implement a basic traversal.

class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
// console.log(a);


const printLinkList = head => {

    let currentNode = head;

    while (currentNode !== null) {
        // console.log(JSON.stringify(currentNode));
        currentNode = currentNode.next;
    }
}
// printLinkList(a);


const printLinkListRecursively = head => {

    if (head === null) return;
    // console.log(JSON.stringify(head));
    printLinkListRecursively(head.next);
}
// printLinkListRecursively(a);


// {"value":"a","next":{"value":"b","next":{"value":"c","next":{"value":"d","next":null}}}}
// {"value":"b","next":{"value":"c","next":{"value":"d","next":null}}}
// {"value":"c","next":{"value":"d","next":null}}
// {"value":"d","next":null}