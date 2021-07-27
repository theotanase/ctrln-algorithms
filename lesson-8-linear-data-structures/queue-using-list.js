"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = __importDefault(require("./linked-list"));
class MyQueueUsingLinkedList {
    constructor() {
        this.storage = new linked_list_1.default();
    }
    enqueue(element) {
        this.storage.insertLast(element);
    }
    dequeue() {
        return this.storage.deleteFirst();
    }
}
const newQueue = new MyQueueUsingLinkedList();
newQueue.enqueue("Ion");
newQueue.enqueue("George");
const firstElementToProcess = newQueue.dequeue();
console.log(firstElementToProcess); // ion
const nextToProcess = newQueue.dequeue();
console.log(nextToProcess); // George
const thisShouldBeNull = newQueue.dequeue();
console.log(thisShouldBeNull); //null
