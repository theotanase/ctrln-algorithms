"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_list_1 = __importDefault(require("./generic-list"));
class GenericQueue {
    constructor() {
        this.storage = new generic_list_1.default();
    }
    enqueue(element) {
        this.storage.insertLast(element);
    }
    dequeue() {
        return this.storage.deleteFirst();
    }
    isEmpty() {
        return this.storage.isEmpty();
    }
}
exports.default = GenericQueue;
// const queueOfStrings = new GenericQueue<string>();
// queueOfStrings.enqueue(4);
// const queueOfNumbers = new GenericQueue<number>();
// queueOfNumbers.enqueue("Ion");
