"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_queue_1 = __importDefault(require("../lesson-8-linear-data-structures/generic-queue"));
class TraversalNode {
    constructor(name, links = {}) {
        this.isVisited = false;
        this.name = name;
        this.links = links;
        this.parent = null;
    }
    getUnvisitedNeighbors() {
        const unvisitedNeighbors = [];
        for (const neighbor of Object.values(this.links)) {
            if (!neighbor.isVisited) {
                unvisitedNeighbors.push(neighbor);
            }
        }
        return unvisitedNeighbors;
    }
}
class GraphWithTraversal {
    constructor() {
        this.nodes = {};
    }
    findPath(start, dest) {
        const startNode = this.nodes[start];
        const destNode = this.nodes[dest];
        this.depthFirstTraversal(startNode, destNode);
        this.printPathTo(destNode);
    }
    findShortestPath(start, dest) {
        const startNode = this.nodes[start];
        const destNode = this.nodes[dest];
        const queue = new generic_queue_1.default();
        startNode.isVisited = true;
        queue.enqueue(startNode);
        while (!queue.isEmpty()) {
            const next = queue.dequeue();
            const unvisitedNeighbors = next.getUnvisitedNeighbors();
            for (const neighbor of unvisitedNeighbors) {
                neighbor.isVisited = true;
                neighbor.parent = next;
                queue.enqueue(neighbor);
            }
        }
        this.printPathTo(destNode);
    }
    printPathTo(node) {
        if (!node.parent) {
            console.log(`Path to ${node.name} NOT FOUND`);
        }
        else {
            let nodeToPrint = node;
            while (nodeToPrint) {
                console.log(`${nodeToPrint.name} <-`);
                nodeToPrint = nodeToPrint.parent;
            }
        }
    }
    depthFirstTraversal(currentNode, destNode) {
        currentNode.isVisited = true;
        if (currentNode != destNode) {
            let nextNode = this.getFirstAvailableNeighbor(currentNode);
            while (nextNode) {
                nextNode.parent = currentNode;
                this.depthFirstTraversal(nextNode, destNode);
                nextNode = this.getFirstAvailableNeighbor(currentNode);
            }
        }
    }
    getFirstAvailableNeighbor(node) {
        for (const link of Object.values(node.links)) {
            if (!link.isVisited) {
                return link;
            }
        }
        return null;
    }
    addNode(nodeName, links) {
        let currentNode = this.nodes[nodeName];
        if (!currentNode) {
            currentNode = new TraversalNode(nodeName, {});
            this.nodes[nodeName] = currentNode;
        }
        for (const linkToAdd of links) {
            const oldLink = currentNode.links[linkToAdd];
            if (!oldLink) {
                let linkNode = this.nodes[linkToAdd];
                if (!linkNode) {
                    linkNode = new TraversalNode(linkToAdd, {});
                    this.nodes[linkToAdd] = linkNode;
                }
                currentNode.links[linkToAdd] = linkNode;
            }
        }
    }
    printLinks(nodeName) {
        const node = this.nodes[nodeName];
        if (!node) {
            console.log("Node does not exist");
            return;
        }
        Object.values(node.links).forEach(link => {
            console.log(`${nodeName} has link to ${link.name}`);
        });
    }
}
const maps = new GraphWithTraversal();
maps.addNode("A", ["B", "C", "D"]);
maps.addNode("B", ["A", "C"]);
maps.addNode("C", ["A", "B", "E"]);
maps.addNode("D", ["A", "E"]);
maps.addNode("E", ["C", "D"]);
maps.findShortestPath("A", "E"); // E, C, A
