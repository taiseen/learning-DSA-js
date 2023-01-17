// 18 - Jan - 2023

const edges = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];


const buildGraph = edges => {

    const graph = {};

    for (let edge of edges) {

        const [src, dst] = edge;

        !(src in graph) && (graph[src] = []);
        !(dst in graph) && (graph[dst] = []);

        graph[src].push(dst);
        graph[dst].push(src);

    }

    return graph;
}

// console.log(buildGraph(edges));

const shortestPath = (edges, src, dst) => {

    const graph = buildGraph(edges);
    const queue = [[src, 0]];
    const visited = new Set([src]);

    while (queue.length) {

        const [currentNode, distance] = queue.shift();

        if (currentNode === dst) return distance;

        for (let neighbor of graph[currentNode]) {

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1;
}


const result = shortestPath(edges, 'a', 'e'); // -> 3
console.log(result);