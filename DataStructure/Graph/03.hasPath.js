// 14 - Jan - 2023


// adjacency list
// directed acyclic graph 
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
}


// Depth First Search with [Recursively]... using callStack
const hasPathDepthFirst = (graph, src, dst) => {

    if (src === dst) return true;

    for (let neighbor of graph[src]) {

        if (hasPathDepthFirst(graph, neighbor, dst)) {
            return true
        }
    }

    return false;
}



// Breadth First Search...
const hasPathBreadthFirst = (graph, src, dst) => {

    const queue = [src];

    while (queue.length) {

        const currentNode = queue.shift();

        if (currentNode === dst) return true;

        for (let neighbor of graph[currentNode]) {
            queue.push(neighbor)
        }

        // graph[currentNode].forEach(neighbor => queue.push(neighbor))
    }

    return false;
}



// const result = hasPathDepthFirst(graph, 'f', 'k');
const result = hasPathBreadthFirst(graph, 'f', 'k');

console.log(result);