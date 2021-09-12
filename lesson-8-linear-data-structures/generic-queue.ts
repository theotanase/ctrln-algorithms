import GenericList from './generic-list';

export default class GenericQueue<T> {

  private storage = new GenericList<T>();

  enqueue(element: T) {
    this.storage.insertLast(element);
  }

  dequeue(): T {
    return this.storage.deleteFirst();
  }

  isEmpty() {
    return this.storage.isEmpty();
  }
}


// const queueOfStrings = new GenericQueue<string>();

// queueOfStrings.enqueue(4);


// const queueOfNumbers = new GenericQueue<number>();

// queueOfNumbers.enqueue("Ion");
