interface PriorityNode<Z> {
  value: Z;
  priority: number;
  next: PriorityNode<Z> | null;
}

class PriorityListWithoutStarvation<W> {
  private start: PriorityNode<W> | null = null;

  insert(priority: number, value: W) {

    this.incrementNodesPriority();

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

  private incrementNodesPriority() {
    let node = this.start;

    while (node != null) {
      node.priority++;

      node = node.next;
    }
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

class PriorityQueueWithoutStarvation<T> {
  private storage = new PriorityListWithoutStarvation<T>();

  enqueue(element: T, priority: number) {
    this.storage.insert(priority, element);
  }

  dequeue() {
    return this.storage.deleteFirst();
  }
}

const queueWithoutStarvation = new PriorityQueueWithoutStarvation<String>();

queueWithoutStarvation.enqueue("Ion", 1); // 4
queueWithoutStarvation.enqueue("George", 3); //5
queueWithoutStarvation.enqueue("Mihai", 2); // 3
queueWithoutStarvation.enqueue("Robert", 4); // 4

const firstPersonToProcess = queueWithoutStarvation.dequeue();
console.log(firstPersonToProcess); // George
