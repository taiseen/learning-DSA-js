// 20 - Jan - 2023

// include || search inside tree...

class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h



const search_inside_tree = (root, targetValue) => {

    if (root === null || root === undefined) return false;

    // breath first ==> approach...
    const queue = [root];

    while (queue.length) {

        const visitedNode = queue.shift();

        const { value, left, right } = visitedNode;

        if (value === targetValue) return true;

        left && queue.push(left);
        right && queue.push(right);
    }

    // when we travel whole tree & not found the target value...
    // then we return false...
    return false;
}



const search_inside_tree_recursively = (root, targetValue) => {

    if (root === null || root === undefined) return false;

    // depth first ==> approach...
    const { value, left, right } = root;

    if (value === targetValue) return true;

    return search_inside_tree_recursively(left, targetValue)
        || search_inside_tree_recursively(right, targetValue);

}


// pass a binary tree & a value searching || looking for...
// if you have the access root node, then you have to access to all nodes in the tree...
// for this kind of searching... breath first approach is very useful...
// so its mean we use Queue order for data accessing from whole tree...

// const result = search_inside_tree(a, 'w');
const result = search_inside_tree_recursively(a, 'b');

console.log(result);