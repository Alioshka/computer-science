'use strict';
// pseudo code, not working solution

class Graph{
    constructor(){
        this.adjacencyMatrix = [];
    }
    addVertex(vertex){
    }
    addEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1;
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 0;
        this.adjacencyMatrix[vertex2][vertex1] = 0;
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
