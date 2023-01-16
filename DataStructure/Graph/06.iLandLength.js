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


// If this condition is not true, 
// then it's the first time I'm seeing this node, so I need to count it.

// & add it to visited that
// way I don't get into a cycle into the node later on


// great thing about SET is in O(1) time, I can add something into the set.
// And I can also check for something within the SET is going to be very quick for our traversal. 