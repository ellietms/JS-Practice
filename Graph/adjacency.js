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

  getList(){
    return this.myAdjacency
  }
}

let firstGraph = new Graph();

firstGraph.addVertex("Tokyo");
firstGraph.addVertex("Thailand");

console.log(firstGraph);

firstGraph.addEdge("Tokyo", "Thailand")

console.log(firstGraph);

let secondGraph = new Graph()

secondGraph.addVertex("shiraz")
secondGraph.addVertex("Esfahan")
secondGraph.addVertex("Tehran")

console.log(secondGraph)

secondGraph.addEdge("shiraz", "Tehran")

console.log(secondGraph)


secondGraph.addEdge("Tehran", "Esfahan")

console.log(secondGraph)


secondGraph.addEdge("shiraz", "Esfahan")

console.log(secondGraph)
