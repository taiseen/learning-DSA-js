// 11 - Jan - 2023
// Depth First Traversal


// graph = {
//      node : edge
// }


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
// where Stack is Empty...
// its means algorithm is done,
// its means you explored as far as possible within your graph.

const depth_first_traversing = (graph, startingNode) => {

    let travelingConnectionList = '';  // | | Remove from Top
    const stack = [startingNode];      // |_| Enter at Top

    while (stack.length) {

        // Processing the node, when its Remove from stack... 
        const currentNode = stack.pop(); // LIFO | Remove node from Top
        travelingConnectionList += currentNode + ' '

        // looking for neighbors node...
        // to Enter them in top of the Stack for traversing...
        for (let neighbor of graph[currentNode]) {
            stack.push(neighbor); // LIFO | Enter neighbor at Top
        }
    }

    return travelingConnectionList;
}



// any recursion uses the underlying callStack
// iterating through this empty array... mean you have zero iterations. 
// If you have zero iterations, then you never make a recursive call. 
// That's the same thing as having a base case...
// A base case is really just a scenario where we don't have a recursive call
const depth_first_traversing_recursion = (graph, startingNode) => {

    console.log(startingNode);

    for (let neighbor of graph[startingNode]) {
        depth_first_traversing_recursion(graph, neighbor)
    }
}



const result = depth_first_traversing(graph, 'a');
// const result = depth_first_traversing_recursion(graph, 'a');

console.log(result);