// 20 - Jan - 2023

class Node {
    constructor(val) {
        this.value = val;
        this.left  = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left  = b;
a.right = c;
b.left  = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(a);

// Node {
//     val: 'a',
//     left: Node {
//       val: 'b',
//       left: Node { val: 'd', left: null, right: null },
//       right: Node { val: 'e', left: null, right: null }
//     },
//     right: Node {
//       val: 'c',
//       left: null,
//       right: Node { val: 'f', left: null, right: null }
//     }
// }