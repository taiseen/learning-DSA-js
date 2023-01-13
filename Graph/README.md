> 11 - Jan - 2023

# Graph 
* Graph is collections of nodes and edges...

graph = node + edge

### `node` = visual it with some Data... 
### `edge` = any connection between pair of nodes... 

### `node` 
we can also call [node] as [vertex]... So it is just data/things... & it has neighbor nodes... <br/> neighbor node are any node that are accessible through the edge...

### `edge` 
It is just relationship between pair of nodes...

<br/>

## Graph can be:
|No| Category           | Symbol  |
|--|--------------------|---------|
|1.| Directed           | ➡️➡️   |  
|2.| Undirected         | ➖➖   |
|3.| Directed + wight   | 5 ➡️➡️ |  
|4.| Undirected + wight | 5 ➖➖ |
|5.| Cycle              | 🔁🔁   |
|6.| Acyclic            | ➡️➡️   |

* Acyclic = No cycles
 if I did a traversal, on the
30:19
Sigma graph, I would get an infinite loop.

<br/>

### 1. Directed graph
It is unidirectional.


### 2. Undirected graph 
No arrow head, mean no directionality


## Graph Traversal:

* Depth First Traversal
* Breadth First Traversal

#### These 2 Traversal techniques can be used for explore the same graph in `Different Order`. 
* How you access items from array is determined this `Different Ordering...` `array.pop()` / `array.shift()`


### Depth First Traversal
From the starting point, pick a direction & travel in that same direction as far as possible, before switching directions.
* Go from neighbor to next neighbor
* its uses a `Stack` [LIFO]
* its operation is `.pop()`
* `Vertical` Data Structure
* it'll explore `ONE directions` at a time. 

### Breadth First Traversal
From the starting point, node explore all of its immediate neighbors, kind of in a circle like this & just keep applying that behavior.
* Go from associated all neighbor
* its uses a `Queue` [FIFO]
* its operation is `.shift()`
* `Horizontal` Data Structure
* it'll explore `ALL directions` evenly.

