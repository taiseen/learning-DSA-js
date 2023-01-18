// 19 - Jan - 2023

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];


const miniIslandCount = gridGraph => {

    let minSize = Infinity;
    const visited = new Set();
    const rowLength = gridGraph.length;
    const colLength = gridGraph[0].length;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {

            const size = exploreGridGraphSize(gridGraph, row, col, visited);

            (size > 0 && size < minSize) && (minSize = size);
        }
    }

    return minSize;
}


const exploreGridGraphSize  = (gridGraph, row, col, visited) => {

    const rowInbounds = 0 <= row && row < gridGraph.length;
    const colInbounds = 0 <= col && col < gridGraph[0].length;

    if (!rowInbounds || !colInbounds) return 0;

    if (gridGraph[row][col] === 'W') return 0;

    const currentPosition = row + ',' + col;

    if (visited.has(currentPosition)) return 0;
    visited.add(currentPosition);

    let size = 1;
    
    size += exploreGridGraphSize(gridGraph, row - 1, col, visited);
    size += exploreGridGraphSize(gridGraph, row + 1, col, visited);
    size += exploreGridGraphSize(gridGraph, row, col - 1, visited);
    size += exploreGridGraphSize(gridGraph, row, col + 1, visited);

    return size;
}



const result = miniIslandCount(grid);
console.log(result);