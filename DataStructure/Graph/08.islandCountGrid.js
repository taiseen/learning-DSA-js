// 18 - Jan - 2023

// grid graph... has Row and Column
const grid = [
    ['W', 'O', 'W', 'W', 'O'],
    ['W', 'O', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'O', 'W'],
    ['W', 'W', 'O', 'O', 'W'],
    ['O', 'W', 'W', 'O', 'O'],
    ['O', 'O', 'W', 'W', 'W'],
];

const islandCount = gridGraph => {

    let islandCount = 0;
    const visited = new Set();
    const rowLength = gridGraph.length;
    const colLength = gridGraph[0].length;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            exploreGridGraph(gridGraph, row, col, visited) && islandCount++;
        }
    }

    return islandCount;
}

const exploreGridGraph = (gridGraph, row, col, visited) => {
    const rowInbounds = 0 <= row && row < gridGraph.length;
    const colInbounds = 0 <= col && col < gridGraph[0].length;

    if (!rowInbounds || !colInbounds) return false;

    if (gridGraph[row][col] === 'W') return false;

    const currentPosition = row + ',' + col;

    if (visited.has(currentPosition)) return false;
    visited.add(currentPosition);


    exploreGridGraph(gridGraph, row - 1, col, visited);
    exploreGridGraph(gridGraph, row + 1, col, visited);
    exploreGridGraph(gridGraph, row, col - 1, visited);
    exploreGridGraph(gridGraph, row, col + 1, visited);

    return true;
}

const result = islandCount(grid); // -> 4
console.log(result);