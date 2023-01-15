// 15 - Jan - 2023

// adjacency list of undirected graph...
const graph = {
    0: [8, 1, 5],
    1: [0],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
    5: [0, 8],
    8: [0, 5],
}

const connectedComponentCount = graph => {

    let count = 0;
    const visited = new Set();

    // loop through ==> Object
    for (let node in graph) {
        exploreGraph(graph, node, visited) && count++;
    }

    return count;
}


const exploreGraph = (graph, currentNode, visited) => {

    if (visited.has(String(currentNode))) return false;
    visited.add(String(currentNode));
    
    // loop through ==> Array
    for (let neighbor of graph[currentNode]) {

        exploreGraph(graph, neighbor, visited);
    }

    return true;
}

const result = connectedComponentCount(graph);
console.log(result);
