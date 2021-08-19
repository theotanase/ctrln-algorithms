"use strict";
class MyStack {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    push(element) {
        this.storage[this.size] = element;
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        this.size--;
        return this.storage[this.size];
    }
    isEmpty() {
        return this.size < 1;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.storage[this.size - 1];
    }
}
const stringsStack = new MyStack();
stringsStack.push("A");
stringsStack.push("B");
console.log(stringsStack.peek()); // B
console.log(stringsStack.pop()); // B
console.log(stringsStack.isEmpty()); // false
console.log(stringsStack.pop()); // A
console.log(stringsStack.isEmpty()); // true
