"use strict";
class MyQueue {
    constructor() {
        this.storage = [];
        this.tail = -1;
        this.head = 0;
    }
    enqueue(element) {
        this.tail++;
        this.storage[this.tail] = element;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const element = this.storage[this.head];
        this.head++;
        return element;
    }
    isEmpty() {
        return this.tail < this.head;
    }
}
const queue = new MyQueue();
const shouldBeNull = queue.dequeue();
console.log(shouldBeNull);
queue.enqueue("Ion");
queue.enqueue("George");
queue.enqueue("Mihai");
const next = queue.dequeue(); // Ion
console.log(next);
const secondNext = queue.dequeue();
console.log(secondNext);
queue.enqueue("Robert");
