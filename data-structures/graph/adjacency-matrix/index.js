'use strict';
// pseudo code, not working solution

class Graph{
    constructor(){
        this.adjacencyMatrix = [0][0];
    }
    addVertex(vertex){

    }
    addEdge(v1,v2){
        this.adjacencyMatrix[v1][v2] = 1;
        this.adjacencyMatrix[v2][v1] = 1;
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyMatrix[v1][v2] = 0;
        this.adjacencyMatrix[v2][v1] = 0;
    }
    removeVertex(vertex){

    }
}

// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong");
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");
// console.log(g);
