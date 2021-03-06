
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        return this.items.push(element);
    }
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    isEmpty(){
       return this.items.length == 0;
    }
}

    class Graph {
    constructor(noOfver){
        this.noOfver = noOfver;
        this.AdjList = new Map();
    }
 
    addVertex(v){
    this.AdjList.set(v, []);
    }

    addEdge(v, w){
	this.AdjList.get(v).push(w);
	this.AdjList.get(w).push(v);
    }

    printGraph(){
	    let get_keys = this.AdjList.keys();
	    for (let i of get_keys){
		    let get_values = this.AdjList.get(i);
		    let conc = "";
		    for (let j of get_values)
			    conc += j + " ";
		    console.log(i + " -> " + conc);
	    }
    }


    dfs(startingNode){
	    var visited = {};
	    this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited){
	    visited[vert] = true;
	    console.log(vert);

	    var get_neighbours = this.AdjList.get(vert);

	    for (var i in get_neighbours) {
		    var get_elem = get_neighbours[i];
		    if (!visited[get_elem])
		    	this.DFSUtil(get_elem, visited);
	    }
    }
}
let g = new Graph(6);
let ver = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < ver.length; i++) {
	g.addVertex(ver[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

console.log("DFS");
g.dfs('A');
