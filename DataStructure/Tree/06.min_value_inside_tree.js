// 22 - Jan - 2023


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


//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1




const min_value_inside_tree = root => {

    // this variable track the min value inside tree...
    let findMinValue = Infinity;

    // breath first ==> approach...
    const queue = [root];

    while (queue.length) {

        const visitedNode = queue.shift(); // <== its run O(n) time...
        // because when we remove 1st element from queue array...
        // then shift all element inside array over one position...

        const { value, left, right } = visitedNode;

        (value < findMinValue) && (findMinValue = value);

        // if exist, then add them serially of the queue[]
        left && queue.push(left);
        right && queue.push(right);
    }

    return findMinValue;
}



const min_value_inside_tree_recursively = root => {

    if (root === null || root === undefined) return Infinity;

    //  depth first with recursive ==> approach...
    const { value, left, right } = root;

    const leftSideChild = min_value_inside_tree_recursively(left);
    const rightSideChild = min_value_inside_tree_recursively(right);

    return Math.min(value, leftSideChild, rightSideChild);

}


// pass a binary tree & a value searching || looking for...
// if you have the access root node, then you have to access to all nodes in the tree...
// for this kind of searching... breath first approach is very useful...
// so its mean we use Queue order for data accessing from whole tree...

const result = min_value_inside_tree(a);
// const result = min_value_inside_tree_recursively(a);

console.log(result);