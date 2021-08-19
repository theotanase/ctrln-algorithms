import GenericList from './generic-list';

class MyBuffer<T> {

  private storage: GenericList<T> = new GenericList<T>();

  private size = 0;

  constructor(private maxSize: number) {
  }

  add(element: T) {
    this.storage.insertLast(element);

    if (this.size == this.maxSize) {
      this.storage.deleteFirst();
    } else {
      this.size++;
    }
  }

  print() {
    this.storage.printElements();
  }
}

const songsBuffer = new MyBuffer<String>(5);

songsBuffer.add("a");
songsBuffer.add("b");
songsBuffer.add("c");
songsBuffer.add("d");
songsBuffer.add("e");

songsBuffer.add("f");

songsBuffer.print(); //  b -> f

songsBuffer.add("g");

songsBuffer.print(); // c -> g
