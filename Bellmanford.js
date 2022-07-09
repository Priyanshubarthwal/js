function Bellman(graph, V, E, src){
        var dis = Array(V).fill(1000000000);
        dis[src] = 0;
    
        for (var i = 0; i < V - 1; i++){
            for (var j = 0; j < E; j++){
                if ((dis[graph[j][0]] + graph[j][2]) < dis[graph[j][1]])
                    dis[graph[j][1]] = dis[graph[j][0]] + graph[j][2];
            }
        }

        for (var i = 0; i < E; i++){
            var x = graph[i][0];
            var y = graph[i][1];
            var weight = graph[i][2];
            if ((dis[x] != 1000000000) &&
                    (dis[x] + weight < dis[y]))
                console.log("Graph contains negative" +" weight cycle<br>");
        }
    
        console.log("(Vertex)   (Distance from Source)");
        for (var i = 0; i < V; i++)
            console.log(i+ "\t\t\t" + dis[i]);
    }
    
    var V = 5; 
    var E = 8;
    
    var graph = [[ 0, 1, -1 ], [ 0, 2, 4 ],
                    [ 1, 2, 3 ], [ 1, 3, 2 ],
                    [ 1, 4, 2 ], [ 3, 2, 5 ],
                    [ 3, 1, 1 ], [ 4, 3, -3 ]];
    Bellman(graph, V, E, 0);
