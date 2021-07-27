import GenericList from './generic-list';

class GenericQueue<T> {

  private storage = new GenericList<T>();

  enqueue(element: T) {
    this.storage.insertLast(element);
  }

  dequeue() {
    return this.storage.deleteFirst();
  }
}


const queueOfStrings = new GenericQueue<string>();

queueOfStrings.enqueue(4);


const queueOfNumbers = new GenericQueue<number>();

queueOfNumbers.enqueue("Ion");
