"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
class MyHashTable {
    constructor() {
        this.factor = 0.3;
        this.capacity = 100;
        this.storage = [];
        this.size = 0;
    }
    get(key) {
        const index = this.getIndex(key);
        if (this.storage[index] == undefined) {
            return null;
        }
        else {
            return this.storage[index];
        }
    }
    add(key, value) {
        const currentValue = this.get(key);
        if (currentValue == null) {
            this.size++;
        }
        if (this.size > this.factor * this.capacity) {
            this.increaseCapacity();
        }
        const index = this.getIndex(key);
        this.storage[index] = {
            key: key,
            value: value
        };
    }
    delete(key) {
        const currentValue = this.get(key);
        if (currentValue == null) {
            return;
        }
        this.size = this.size - 1;
        const index = this.getIndex(key);
        // @ts-ignore
        this.storage[index] = undefined;
    }
    increaseCapacity() {
        this.capacity = this.capacity * 2;
        const newStorage = [];
        for (let i = 0; i < this.storage.length; i++) {
            const oldElement = this.storage[i];
            const elementKey = oldElement.key;
            const newIndex = this.getIndex(elementKey);
            newStorage[newIndex] = oldElement;
        }
        this.storage = newStorage;
    }
    getIndex(key) {
        const hash = md5_1.default(key);
        const decimalHash = parseInt(hash, 16);
        const index = decimalHash % this.capacity;
        return index;
    }
}
const dex = new MyHashTable();
dex.add("anvelopa", "Parte esentiala a autovehiculului");
dex.delete("anvelopa");
const definition = dex.get("anvelopa");
console.log(definition);
