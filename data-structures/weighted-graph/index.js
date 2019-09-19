'use strick';

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}

let g = new WeightedGraph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo", 25000);
g.addEdge("Dallas", "Aspen", 1000);
g.addEdge("Hong Kong", "Tokyo", 5000);
g.addEdge("Hong Kong", "Dallas", 20000);
g.addEdge("Los Angeles", "Hong Kong", 15000);
g.addEdge("Los Angeles", "Aspen", 3500);

console.log(g);
