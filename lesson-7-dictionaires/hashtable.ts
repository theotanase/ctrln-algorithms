import md5 from 'md5';

interface HashElement {
  key: string;
  value: string;
}

class MyHashTable {

  private factor = 0.3;
  private capacity = 100;
  private storage: HashElement[] = [];
  private size = 0;

  get(key: string) {
    const index = this.getIndex(key);

    if (this.storage[index] == undefined) {
      return null;
    } else {
      return this.storage[index];
    }
  }

  add(key: string, value: string) {
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

  delete(key: string) {
    const currentValue = this.get(key);

    if (currentValue == null) {
      return;
    }

    this.size = this.size - 1;

    const index = this.getIndex(key);

    // @ts-ignore
    this.storage[index] = undefined;
  }

  private increaseCapacity() {
    this.capacity = this.capacity * 2;

    const newStorage: HashElement[] = [];

    for (let i = 0; i < this.storage.length; i++) {

      const oldElement = this.storage[i];
      const elementKey = oldElement.key;
      const newIndex = this.getIndex(elementKey);

      newStorage[newIndex] = oldElement;
    }

    this.storage = newStorage;
  }

  private getIndex(key: string) {
    const hash = md5(key);
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
