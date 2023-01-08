class Graph {
  constructor() {
    this.myAdjacency = {};
  }

  addVertex(nodeName) {
    if (!this.myAdjacency[nodeName]) this.myAdjacency[nodeName] = [];
  }
}

let firstGraph = new Graph();

firstGraph.addVertex("Tokyo");
firstGraph.addVertex("Thailand");

firstGraph;

console.log(firstGraph);
