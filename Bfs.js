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

 
    // bfs(v)
    bfs(startingNode){
	    let visited = {};
    	let q = new Queue();

	    visited[startingNode] = true;
	    q.enqueue(startingNode);

	    while (!q.isEmpty()) {
		    let getQueueElement = q.dequeue();
            console.log(getQueueElement);
            let get_List = this.AdjList.get(getQueueElement);
		    for (let i in get_List) {
			    let neigh = get_List[i];
                if (!visited[neigh]) {
				    visited[neigh] = true;
				    q.enqueue(neigh);
			    }
		    }
	    }
    }
}

let v = new Graph(6);
let ver = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < ver.length; i++) {
	v.addVertex(ver[i]);
}

v.addEdge('A', 'B');
v.addEdge('A', 'D');
v.addEdge('A', 'E');
v.addEdge('B', 'C');
v.addEdge('D', 'E');
v.addEdge('E', 'F');
v.addEdge('E', 'C');
v.addEdge('C', 'F');

console.log("BFS");
v.bfs('A');
