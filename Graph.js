class Graph{
    constructor(vertices){
        this.NoOfVertices=vertices;
        this.list=new Map();
    }

    AddVertex(v){
        this.list.set(v,[]);
    }

    AddEdge(u,v){
        this.list.get(u).push(v);
        this.list.get(v).push(u);
    }

    DFS(src){
        var visit={};
        this.dfs(src,visit);
    }
    dfs(vertex,visit){
        visit[vertex]=true;
        console.log(vertex);

        var nbr=this.list.get(vertex);
        for(var i in nbr){
            var el=nbr[i];
            if(!visit[el]){
                this.dfs(el,visit);
            }
        }
    }

    BFS(src){
        var visit={};
        var q=new Queue();
        visit[src]=true;

        q.enqueue(src);

        while(!q.isEmpty()){
            var getQueueElement=q.dequeue();
            console.log(getQueueElement);

            var get_list=this.list.get(getQueueElement);
            for(var i in get_list){
                var neigh=get_list[i];
                if(!visit[neigh]){
                    visit[neigh]=true;
                    q.enqueue(neigh);
                }
            }
        }
    } 
}

class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }
    
    dequeue(){
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();    
    }

    isEmpty(){
        return this.items.length==0;
    }
}

var g=new Graph(6);
var vertices=['a','b','c','d','e','f'];

for(var i=0;i<vertices.length;i++){
    g.AddVertex(vertices[i]);
}

g.AddEdge('a','b');
g.AddEdge('a','d');
g.AddEdge('a','e');
g.AddEdge('b','c');
g.AddEdge('d','e');
g.AddEdge('e','f');
g.AddEdge('e','c');
g.AddEdge('c','f');

console.log("BFS ");
g.BFS('a')

console.log("DFS ");
g.DFS('a')
