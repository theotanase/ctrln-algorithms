"use strict";
class PriorityList {
    constructor() {
        this.start = null;
    }
    insert(priority, value) {
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
class PriorityQueue {
    constructor() {
        this.storage = new PriorityList();
    }
    enqueue(element, priority) {
        this.storage.insert(priority, element);
    }
    dequeue() {
        return this.storage.deleteFirst();
    }
}
const passengers = new PriorityQueue();
passengers.enqueue("Ion", 1);
passengers.enqueue("Mihai", 2);
const firstPassenger = passengers.dequeue(); //Mihai
console.log(firstPassenger);
