class Graph {
  constructor() {
    this.myAdjacency = {};
  }

  addVertex(vertextName) {
    if (!this.myAdjacency[vertextName]) this.myAdjacency[vertextName] = [];
  }

  addEdge(vertext1, vertext2) {
    if (!this.myAdjacency[vertext1].includes(vertext2)) {
      this.myAdjacency[vertext1].push(vertext2);
    }

    if (!this.myAdjacency[vertext2].includes(vertext1)) {
      this.myAdjacency[vertext2].push(vertext1);
    }
  }
}

let firstGraph = new Graph();

firstGraph.addVertex("Tokyo");
firstGraph.addVertex("Thailand");

console.log(firstGraph);

firstGraph.addEdge("Tokyo", "Thailand")

console.log(firstGraph);

