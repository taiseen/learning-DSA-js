// 16 - Jan - 20223

// Find out Largest Component...

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

const largestComponent = graph => {

    let largestComponent = 0;
    const visited = new Set();

    // loop through ==> { Object }
    for (let node in graph) {

        const size = exploreSize(graph, node, visited);

        size > largestComponent && (largestComponent = size);
    }

    return largestComponent;
}



const exploreSize = (graph, currentNode, visited) => {

    // checking the memorizing the path...
    if (visited.has(currentNode)) return false;

    // if this condition is not true...
    // then memorizing the path...
    visited.add(currentNode);
    // then it's the first time we seeing this node, so we need to count it.
    // & add it to visited that way we don't get into a cycle into the node later on

    let size = 1;

    // loop through ==> [ Array ]
    for (let neighbor of graph[currentNode]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
}

const result = largestComponent(graph);
console.log(result);