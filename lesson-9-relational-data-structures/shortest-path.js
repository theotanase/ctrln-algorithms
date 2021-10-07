function getShortestPath(source, dest, graph) {
  const distances = [];
  const isVisited = [];

  const numberOfNodes = graph.length - 1;
  for (let nodeIndex = 0; nodeIndex <= numberOfNodes; nodeIndex++) {
    distances[nodeIndex] = Number.MAX_SAFE_INTEGER;
    isVisited[nodeIndex] = false;
  }

  distances[source] = 0;
  let iterationsCounter = 0;
  while (iterationsCounter < numberOfNodes) {

    let minDistance = Number.MAX_SAFE_INTEGER;
    let closestNode = -1;
    for (let nodeIndex = 1; nodeIndex <= numberOfNodes; nodeIndex++) {
      if (!isVisited[nodeIndex] && distances[nodeIndex] < minDistance) {
        closestNode = nodeIndex;
        minDistance = distances[nodeIndex];
      }
    }

    isVisited[closestNode] = true;

    for (let nodeIndex = 1; nodeIndex <= numberOfNodes; nodeIndex++) {
      if (graph[closestNode][nodeIndex] > 0 && !isVisited[nodeIndex]) {
        const edgeCost = graph[closestNode][nodeIndex];

        const distanceToNeighbor = distances[closestNode] + edgeCost;

        if (distanceToNeighbor < distances[nodeIndex]) {
          distances[nodeIndex] = distanceToNeighbor;
        }
      }
    }
    iterationsCounter++;
  }

  return distances[dest];
}


const cities = [
  [0, 0, 0, 0, 0],
  [0, 0, 5, 3, 10],
  [0, 5, 0, 0, 4],
  [0, 3, 0, 0, 2],
  [0, 10, 4, 2, 0],
]

console.log(getShortestPath(3, 4, cities));