"use strict";
class PriorityListWithoutStarvation {
    constructor() {
        this.start = null;
    }
    insert(priority, value) {
        this.incrementNodesPriority();
        const newNode = this.createNode(value, priority);
        let left = null;
        let right = this.start;
        while (right != null && right.priority >= priority) {
            left = right;
            right = right.next;
        }
        if (left == null) {
            this.start = newNode;
        }
        else {
            left.next = newNode;
        }
        newNode.next = right;
    }
    deleteFirst() {
        if (this.isEmpty()) {
            return null;
        }
        // @ts-ignore
        const value = this.start.value;
        // @ts-ignore
        this.start = this.start.next;
        return value;
    }
    incrementNodesPriority() {
        let node = this.start;
        while (node != null) {
            node.priority++;
            node = node.next;
        }
    }
    createNode(value, priority) {
        return {
            value: value,
            next: null,
            priority: priority
        };
    }
    isEmpty() {
        return this.start === null;
    }
}
class PriorityQueueWithoutStarvation {
    constructor() {
        this.storage = new PriorityListWithoutStarvation();
    }
    enqueue(element, priority) {
        this.storage.insert(priority, element);
    }
    dequeue() {
        return this.storage.deleteFirst();
    }
}
const queueWithoutStarvation = new PriorityQueueWithoutStarvation();
queueWithoutStarvation.enqueue("Ion", 1); // 4
queueWithoutStarvation.enqueue("George", 3); //5
queueWithoutStarvation.enqueue("Mihai", 2); // 3
queueWithoutStarvation.enqueue("Robert", 4); // 4
const firstPersonToProcess = queueWithoutStarvation.dequeue();
console.log(firstPersonToProcess); // George
