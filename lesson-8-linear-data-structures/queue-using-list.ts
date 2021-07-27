import MyLinkedList from './linked-list';

class MyQueueUsingLinkedList {

  private storage = new MyLinkedList();

  enqueue(element: any) {
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
