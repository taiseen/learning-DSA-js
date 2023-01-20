// 21 - Jan - 2023

// Breadth First Traversing...

class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const breadthFirstTraversing = (root) => {

    if (root === null || root === undefined) return [];

    const treeValue = [];
    const queue = [root]; 
    // breadth first traversing, need a queue for ordering

    // iterative traversal through nodes...
    while (queue.length) {

        const visitedNode = queue.shift();

        const { value, left, right } = visitedNode;

        treeValue.push(value);

        left && queue.push(left);    // remove from queue 1st
        right && queue.push(right);  // remove from queue 2nd
    }

    return treeValue;
}


const result = breadthFirstTraversing(a);
console.log(result);