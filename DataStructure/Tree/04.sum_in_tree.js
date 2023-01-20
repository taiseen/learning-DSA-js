// 20 - Jan - 2023

// Depth First Traversing...

class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}


const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;



const depthFirstSum = root => {

    if (root === null || root === undefined) return 0;

    let totalTreeSum = 0;
    const stack = [root];

    while (stack.length) {

        const currentNode = stack.pop();

        const { value, left, right } = currentNode;

        totalTreeSum += value;

        right && stack.push(right);
        left && stack.push(left);
    }

    return totalTreeSum;
};



const depthFirstSumRecursively = root => {

    if (root === null || root === undefined) return 0;

    const { value, left, right } = root;

    return value
        + depthFirstSumRecursively(left)
        + depthFirstSumRecursively(right);
};



// const result = depthFirstSum(a);
const result = depthFirstSumRecursively(a);
console.log(result);