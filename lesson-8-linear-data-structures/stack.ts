class MyStack<T> {

  private storage: T[] = [];

  private size = 0;

  push(element: T) {
    this.storage[this.size] = element;
    this.size++;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    this.size--;
    return this.storage[this.size];
  }

  isEmpty() {
    return this.size < 1;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.storage[this.size - 1];
  }
}

const stringsStack = new MyStack<String>();

stringsStack.push("A");
stringsStack.push("B");

console.log(stringsStack.peek()); // B
console.log(stringsStack.pop()); // B
console.log(stringsStack.isEmpty()); // false

console.log(stringsStack.pop()); // A
console.log(stringsStack.isEmpty()); // true
