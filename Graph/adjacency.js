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

  removeEdge(vertext1, vertext2) {
    if (this.myAdjacency[vertext1].includes(vertext2)) {
      this.myAdjacency[vertext1] = this.myAdjacency[vertext1].filter(
        (vertext) => vertext !== vertext2
      );
    }

    if (this.myAdjacency[vertext2].includes(vertext1)) {
      this.myAdjacency[vertext2] = this.myAdjacency[vertext2].filter(
        (vertext) => vertext !== vertext1
      );
    }
  }

  removeVertex(vertextName) {
    this.myAdjacency[vertextName].map((eachEdge) =>
      this.removeEdge(eachEdge, vertextName)
    );

    delete this.myAdjacency[vertextName]
  }

  getList() {
    return this.myAdjacency;
  }
}

// Try the class

// first class
let firstGraph = new Graph();

firstGraph.addVertex("Tokyo");
firstGraph.addVertex("Thailand");
firstGraph.addEdge("Tokyo", "Thailand");

console.log(firstGraph);

// second class

let secondGraph = new Graph();

// add vertext
secondGraph.addVertex("shiraz");
secondGraph.addVertex("Esfahan");
secondGraph.addVertex("Tehran");

// add edge
secondGraph.addEdge("shiraz", "Tehran");
secondGraph.addEdge("Tehran", "Esfahan");
secondGraph.addEdge("shiraz", "Esfahan");

console.log(secondGraph);

// remove edge
// secondGraph.removeEdge("shiraz", "Tehran");
// console.log("This ========> ", secondGraph);

secondGraph.removeVertex("Esfahan")
console.log("=======> ",secondGraph)