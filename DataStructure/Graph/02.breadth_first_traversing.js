// 12 - Jan - 2023
// Breadth First Traversal


// graph = {
//      node : edge
// }


// we should representing graphs by adjacency list, 
// so an operation like traversing/finding the neighbors of a node is quite simple.

// adjacency list | data representation for graph data.
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

// When reached at the state, 
// where Queue is Empty...
// its means algorithm is done,
// its means you explored as far as possible within your graph.

const depth_first_traversing = (graph, startingNode) => {

    let travelingConnectionList = '';  // _____ Remove from Front
    const queue = [startingNode];      // _____ Enter from Back

    while (queue.length) {

        const currentNode = queue.shift(); // FIFO | Remove node from Front
        travelingConnectionList += currentNode + ' '

        // looking for neighbors node...
        // to Enter them in Queue for traversing...
        for (let neighbor of graph[currentNode]) {
            queue.push(neighbor); // FIFO | Enter neighbor from Back
        }
    }

    return travelingConnectionList;
}


const result = depth_first_traversing(graph, 'a');

console.log(result); 
// Output will be ==> a b c d e f