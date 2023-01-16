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

    let numberOfComponent = 0;
    const visited = new Set();
    // JavaScript SET give us O(1) lookup & O(1) addition
    // We definitely want to use visited to prevent cycles...
    // That's one of the main reasons we always had visited to our graph traversals.

    // loop through ==> { Object }
    for (let node in graph) {
        // begin traversal...
        // if exploreGraph returns true...
        // then that's a new component.
        exploreGraph(graph, node, visited) && numberOfComponent++;

        // for scenarios where we, iterate into a node...
        // that we already explored or visited, 
        // then this function call is going to return false, 
        // because if something's already explored or visited, 
        // it would have been added into visited. 
        // So that's why We using some Boolean return value
        // for this recursive function...
    }

    return numberOfComponent;
}


// traversal code to just explore some single component as far as possible.
const exploreGraph = (graph, currentNode, visited) => {

    // if currentNode node is visited, then return false from here...
    // there's no reason to travel through this currentNode anymore. 
    // & stop this ♾️ infinite recursive function execution...
    // & this how we can avoid an cycle in the graph traversing process...
    // So return false, because this might be a cycle 🔁 ...
    if (visited.has(String(currentNode))) return false;

    // technically...
    // KEY's of a JavaScript Object are going to be always converted into string...

    // this node is Not visited, but we visit it right now... 
    // so we add it into the visited set...
    visited.add(String(currentNode));

    // to be sure to mark NEW nodes as visited as you traverse them, 
    // because only when you marked a NEW node as visited & complete that traversal,  
    // then should you increment++ your count...

    // loop through ==> [ Array ]
    for (let neighbor of graph[currentNode]) {

        exploreGraph(graph, neighbor, visited);
    }

    // hit this line [return true] 
    // then it must be the case that, 
    // it has already finished exploring all of its neighbors, right, 
    // because TOP for Loop does the job of exploring all of the neighbors &...
    return true;

    // exploring a new iLand or a new component...
    // it's going to return true
}


const result = connectedComponentCount(graph);
console.log(result);
