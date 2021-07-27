"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericList {
    constructor() {
        this.start = null;
        this.end = null;
    }
    insertFirst(value) {
        const newNode = this.createNode(value);
        newNode.next = this.start;
        if (this.isEmpty()) {
            this.end = newNode;
        }
        this.start = newNode;
    }
    insertLast(value) {
        const newNode = this.createNode(value);
        if (this.end != null) {
            this.end.next = newNode;
        }
        if (this.isEmpty()) {
            this.start = newNode;
        }
        this.end = newNode;
    }
    deleteFirst() {
        // start -> start.next
        if (this.isEmpty()) {
            return null;
        }
        const value = this.start.value;
        this.start = this.start.next;
        if (this.start == null) {
            this.end = null;
        }
        return value;
    }
    deleteLast() {
        // end -> nodului de la stanga
        if (this.isEmpty()) {
            return;
        }
        if (this.start == this.end) {
            this.start = null;
            this.end = null;
        }
        else {
            let theNodeBeforeTheLast = this.start;
            while (theNodeBeforeTheLast.next != this.end) {
                theNodeBeforeTheLast = theNodeBeforeTheLast.next;
            }
            theNodeBeforeTheLast.next = null;
            this.end = theNodeBeforeTheLast;
        }
    }
    isEmpty() {
        return this.start === null;
    }
    createNode(value) {
        return {
            value: value,
            next: null
        };
    }
    printElements() {
        let startCopy = this.start;
        while (startCopy != null) {
            console.log(`${startCopy.value},`);
            startCopy = startCopy.next;
        }
    }
}
exports.default = GenericList;
