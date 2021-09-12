import GenericQueue from "../lesson-8-linear-data-structures/generic-queue";

class TraversalNode {
    public name: string;
    public isVisited = false;
    public links: { [key: string]: TraversalNode };
    public parent: TraversalNode | null;

    constructor(name, links = {}) {
        this.name = name;
        this.links = links;
        this.parent = null;
    }

    public getUnvisitedNeighbors(): TraversalNode[] {
        const unvisitedNeighbors: TraversalNode[] = [];

        for (const neighbor of Object.values(this.links)) {
            if (!neighbor.isVisited) {
                unvisitedNeighbors.push(neighbor);
            }
        }

        return unvisitedNeighbors;
    }
}

class GraphWithTraversal {
    private nodes: { [key: string]: TraversalNode } = {};

    findPath(start: string, dest: string) {
        const startNode = this.nodes[start];
        const destNode = this.nodes[dest];

        this.depthFirstTraversal(startNode, destNode);

        this.printPathTo(destNode);
    }

    findShortestPath(start: string, dest: string) {
        const startNode = this.nodes[start];
        const destNode = this.nodes[dest];

        const queue = new GenericQueue<TraversalNode>();

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

    printPathTo(node: TraversalNode) {
        if (!node.parent) {
            console.log(`Path to ${node.name} NOT FOUND`);
        } else {

            let nodeToPrint: TraversalNode | null = node;
            while (nodeToPrint) {
                console.log(`${nodeToPrint.name} <-`);
                nodeToPrint = nodeToPrint.parent;
            }
        }

    }

    depthFirstTraversal(currentNode: TraversalNode, destNode: TraversalNode) {
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

    getFirstAvailableNeighbor(node: TraversalNode) {
        for (const link of Object.values(node.links)) {
            if (!link.isVisited) {
                return link;
            }
        }

        return null;
    }

    addNode(nodeName: string, links: string[]) {
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

    printLinks(nodeName: string) {
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

