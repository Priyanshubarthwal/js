class Graph{
                constructor(v){
                    this.V = v
        
                    this.adj = new Array(this.V)
                    for (let i = 0 ; i < this.V ; i+=1){
                        this.adj[i] = new Array()
                    }
                }
        
                addEdge(v, w){
                    this.adj[v].push(w)
                }
        
                topological(v, visit, stack){
                    visit[v] = true;
                    let i = 0;
        
                    for(i = 0 ; i < this.adj[v].length ; i++){
                        if(!visit[this.adj[v][i]]){
                            this.topological(this.adj[v][i], visit, stack)
                        }
                    }
        
                    stack.push(v);
                }
        
                topologicalSort(){
                    let stack = new Array()
        
                    let visit = new Array(this.V);
                    for (let i = 0 ; i < this.V ; i++){
                        visit[i] = false;
                    }
        
                    for (let i = 0 ; i < this.V ; i++){
                        if (visit[i] == false){
                            this.topological(i, visit, stack);
                        }
                    }
        
                    while (stack.length != 0){
                        console.log(stack.pop() + " ")
                    }
                }
            }

            var g = new Graph(6)
            g.addEdge(5, 2)
            g.addEdge(5, 0)
            g.addEdge(4, 0)
            g.addEdge(4, 1)
            g.addEdge(2, 3)
            g.addEdge(3, 1)
            
            console.log("Topological sort is ")
            
            g.topologicalSort()
