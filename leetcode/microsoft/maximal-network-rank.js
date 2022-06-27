/*
There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.

The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

APPROACH
find edges from each node
for all combos for each city - sum all edges together
-- if nodes are connected by an edge, need to subtract 1

build a graph
key: node
value: set of all nodes connected to it

*/


/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    const graph = {};
    let max = 0;
    for (let i = 0; i < n; i++) {
        graph[i] = new Set();
    }
    // iterate through roads to populate sets
    for (let i = 0; i < roads.length; i++) {
        const [node0, node1] = roads[i];
        graph[node0].add(node1)
        graph[node1].add(node0)
    }
    // now pair each
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const sum = graph[i].has(j) ? graph[i].size + graph[j].size - 1 : graph[i].size + graph[j].size;
            max = sum > max ? sum : max;
        }
    }
    return max;
};

console.log(maximalNetworkRank(8, [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]]))
