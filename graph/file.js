function bfs(graph, root) {
    // store distances of nodes 
    let nodesLen = {}

    // initialize every element with infinity
    for (let i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity
    }
    // only root node distance is set to 0 
    nodesLen[root] = 0 
    
    // keep track of nodes
    let queue = [root] 
    // keep track of current node that we are traversing
    let current
  
    // check if empty if not remove a node. as queue first in first out we use shift
    while (queue.length != 0) {
      current = queue.shift()
      
      // we get the nodes that  are connected to current node
      let curConnected = graph[current]
      // this will keep track of index of current node . which is in graph above
      let neighborIdx = []
      // getting index
      let idx = curConnected.indexOf(1)
      while (idx != -1) {
        // pushing index
        neighborIdx.push(idx)
        // looking for next connected node index 
        idx = curConnected.indexOf(1, idx + 1)
      }
      

       // looping array to get the distance 
      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1
          queue.push(neighborIdx[j])
        }
      }
    }
    return nodesLen
  }
  
  let exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ]
  
  console.log(bfs(exBFSGraph, 1))