// 14 - Jan - 2023

// undirected graph... with cyclic... 
// So to be symmetric in a way...
// if 🟡 A Node is in B's neighbor, 
// then 🟡 B Node should be also an A's neighbor.

// every pair of these edge list, 
// represents a connection between two nodes...
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

// we should representing graphs by adjacency list, 
// so an operation like traversing/finding the neighbors of a node is quite simple.
// so when we perform our traversal, that work best on an adjacency list...

// edges list ===> adjacency list...
const buildGraphByAdjacencyList = edges => {

    const graph = {};

    for (let edge of edges) {

        const [src, dst] = edge;

        !(src in graph) && (graph[src] = []);
        !(dst in graph) && (graph[dst] = []);

        graph[src].push(dst);       // direction create --> [Left ➡️ Right] & [top ⬅️ bottom]
        graph[dst].push(src);       // direction create --> [Left ⬅️ Right] & [top ➡️ bottom]

        // by pushing both,         create Undirected graph - 2️⃣ way rode <==>
        // OFF one of any pushing,  create Directed graph   - 1️⃣ way rode ==> || <==   
    }

    return graph;
}

// const graphAdjacencyList = buildGraphByAdjacencyList(edges);
// console.log(graphAdjacencyList);


const hasPath = (graph, src, dst, visited) => {

    // bast case...
    if (src === dst) return true;

    // if node is visited,  
    // then there's no reason to travel through this node again...
    // then stop this function execution and return false...
    if (visited.has(src)) return false;     // avoid loop | cycling... 🔁 
    visited.add(src);                       // if not visited, mark as visited... ✅

    // if this src node has not been visited, visit it & mark it visited
    // & after then we'll iterate through this src node neighbors...

    for (const neighbor of graph[src]) {

        if (hasPath(graph, neighbor, dst, visited)) {
            return true;
        }

    }

    return false;
}


const undirectedGraph = (edges, src, dst) => {

    // for checking & store that node is visited or not...
    const visited = new Set();

    // convert edge list into adjacency list...
    const graph = buildGraphByAdjacencyList(edges);

    return hasPath(graph, src, dst, visited);
}


const result = undirectedGraph(edges, 'i', 'l');
console.log(result);