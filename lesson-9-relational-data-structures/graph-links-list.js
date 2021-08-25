"use strict";
class MyGraph {
    constructor() {
        this.nodes = {};
    }
    addNode(nodeName, links) {
        let currentNode = this.nodes[nodeName];
        if (!currentNode) {
            currentNode = {
                name: nodeName,
                links: {}
            };
            this.nodes[nodeName] = currentNode;
        }
        for (const linkToAdd of links) {
            const oldLink = currentNode.links[linkToAdd];
            if (!oldLink) {
                let linkNode = this.nodes[linkToAdd];
                if (!linkNode) {
                    linkNode = {
                        name: linkToAdd,
                        links: {},
                    };
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
const friendsGraph = new MyGraph();
friendsGraph.addNode("A", ["B", "D"]);
friendsGraph.addNode("B", ["A", "D"]);
friendsGraph.addNode("C", ["D"]);
friendsGraph.addNode("D", ["A", "B", "C"]);
friendsGraph.printLinks("A"); // B, D
friendsGraph.printLinks("B"); // A, D
friendsGraph.printLinks("C"); // D
friendsGraph.printLinks("D"); // A, B, C
