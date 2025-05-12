class HashTable {
    constructor() {
        this.table = new Array(10);
    }

    #hash(key) {
        let hash = 999;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this.#hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.#hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.#hash(key);
        this.table[index] = undefined;
    }
}

const hashTable = new HashTable();
hashTable.set('name', 'John');
hashTable.set('age', 20);

console.log(hashTable.get('name'));
console.log(hashTable.get('age'));

hashTable.remove('name');

console.log(hashTable.get('name'));

