// 20 - Jan - 2023

// Depth First Traversing...

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


const depthFirstTraversing = root => {

    if (root === null || root === undefined) return [];

    const treeValue = [];
    const stack = [root];

    while (stack.length) {

        const currentNode = stack.pop();

        const { value, left, right } = currentNode;

        treeValue.push(value);

        right && stack.push(right);
        left && stack.push(left);
    }

    return treeValue;
};


const depthFirstTraversingRecursively = root => {

    if (root === null || root === undefined) return [];

    const leftSideChild = depthFirstTraversingRecursively(root.left)
    const rightSideChild = depthFirstTraversingRecursively(root.right)

    return [root.value, ...leftSideChild, ...rightSideChild];
};


// const result = depthFirstTraversing(a);
const result = depthFirstTraversingRecursively(a);
console.log(result);