import LinkedList from "./LinkedList";

class HashTable {
    #keys;
    constructor(size = 3) {
        this.size = size;
        this.table = new Array(size);
        this.#keys = new Set();
        this.count = 0;
    }

    // Better hash function
    #hash(key, size = this.size) {
        let hash = 5381;
        for (let ch of key) {
            hash = (hash * 33) ^ ch.charCodeAt(0);
        }
        return Math.abs(hash) % size;
    }

    #resize(newSize) {
        const oldData = this.table;
        this.size = newSize;
        this.table = new Array(newSize);
        this.count = 0;

        for (let bucket of oldData) {
            if (bucket) {
                for (let [key, value] of bucket.entries()) {
                    this.set(key, value);
                }
            }
        }
    }

    set(key, value) {
        if (this.count / this.size > 0.75) {
            this.#resize(this.size * 2); // Double the size
        }

        const index = this.#hash(key);
        if (!this.table[index]) {
            this.table[index] = new LinkedList();
        }

        const bucket = this.table[index];
        const existing = bucket.find(key);

        if (!existing) {
            this.count++;
            this.#keys.add(key);
        }

        bucket.insert(key, value);
    }

    get(key) {
        const index = this.#hash(key);
        const bucket = this.table[index];

        if (!bucket) return null;
        return bucket.find(key);
    }

    keys() {
        return Array.from(this.#keys);
    }

    values() {
        const values = [];
        for (let bucket of this.table) {
            if (bucket) {
                for (let [_, value] of bucket.entries()) {
                    values.push(value);
                }
            }
        }
        return values;
    }

    entries() {
        const all = [];
        for (let bucket of this.table) {
            if (bucket) {
                for (let entry of bucket.entries()) {
                    all.push(entry);
                }
            }
        }
        return all;
    }
}

const hashTable = new HashTable();
hashTable.set('name', 'John');
hashTable.set('age', 20);
hashTable.set('city', 'New York');
hashTable.set('country', 'USA');
hashTable.set('phone', '1234567890');
hashTable.set('name', 'Jane');

console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.entries());