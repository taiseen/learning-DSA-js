// 11 - Jan - 2023

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

const depth_traversing = (graph, startingNode) => {

    let travelingConnectionList = '';
    const stack = [startingNode];

    while (stack.length > 0) {

        const current = stack.pop();
        travelingConnectionList += current + ' '

        for (let node of graph[current]) {
            stack.push(node);
        }
    }

    return travelingConnectionList;
}


const result = depth_traversing(graph, 'a');

console.log(result); 
// Output will be ==> a c e b d f