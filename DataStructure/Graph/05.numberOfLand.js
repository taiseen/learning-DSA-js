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

    let numberOfLand = 0;
    const visited = new Set();

    // loop through ==> {Object}
    for (let node in graph) {
        exploreGraph(graph, node, visited) && numberOfLand++;
    }

    return numberOfLand;
}


const exploreGraph = (graph, currentNode, visited) => {

    // if currentNode node is visited, 
    // then return false from here, there's no reason to travel through this currentNode anymore. 
    // & this how we can avoid an ♾️ infinite recursion/cycle in the graph traversing process...
    if (visited.has(String(currentNode))) return false;

    // this node is Not visited, but we visited right now, so we add it into the visited set...
    visited.add(String(currentNode));

    // loop through ==> [Array]
    for (let neighbor of graph[currentNode]) {

        exploreGraph(graph, neighbor, visited);
    }

    return true;
}

const result = connectedComponentCount(graph);
console.log(result);
