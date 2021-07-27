interface PriorityNode<Z> {
  value: Z;
  priority: number;
  next: PriorityNode<Z> | null;
}

class PriorityList<W> {
  private start: PriorityNode<W> | null = null;

  insert(priority: number, value: W) {
    const newNode = this.createNode(value, priority);

    let left: PriorityNode<W> | null = null;
    let right: PriorityNode<W> | null = this.start;

    while (right != null && right.priority >= priority) {
      left = right;
      right = right.next;
    }

    if (left == null) {
      this.start = newNode;
    } else {
      left.next = newNode;
    }

    newNode.next = right;
  }

  deleteFirst() {

    if (this.isEmpty()) {
      return null;
    }

    // @ts-ignore
    const value = this.start.value;

    // @ts-ignore
    this.start = this.start.next;

    return value;
  }

  private createNode(value: W, priority: number): PriorityNode<W> {
    return {
      value: value,
      next: null,
      priority: priority
    };
  }

  private isEmpty() {
    return this.start === null;
  }
}

class PriorityQueue<T> {
  private storage = new PriorityList<T>();

  enqueue(element: T, priority: number) {
    this.storage.insert(priority, element);
  }

  dequeue() {
    return this.storage.deleteFirst();
  }
}

const passengers = new PriorityQueue<string>();
passengers.enqueue("Ion", 1);
passengers.enqueue("Mihai", 2);

const firstPassenger = passengers.dequeue(); //Mihai
console.log(firstPassenger);
