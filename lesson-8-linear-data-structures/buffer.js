"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_list_1 = __importDefault(require("./generic-list"));
class MyBuffer {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.storage = new generic_list_1.default();
        this.size = 0;
    }
    add(element) {
        this.storage.insertLast(element);
        if (this.size == this.maxSize) {
            this.storage.deleteFirst();
        }
        else {
            this.size++;
        }
    }
    print() {
        this.storage.printElements();
    }
}
const songsBuffer = new MyBuffer(5);
songsBuffer.add("a");
songsBuffer.add("b");
songsBuffer.add("c");
songsBuffer.add("d");
songsBuffer.add("e");
songsBuffer.add("f");
songsBuffer.print(); //  b -> f
songsBuffer.add("g");
songsBuffer.print(); // c -> g
