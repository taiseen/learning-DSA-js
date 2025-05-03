const DEFAULT_CAPACITY = 53;

class CustomArray {
    constructor(capacity = DEFAULT_CAPACITY) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.length = 0;
    }

    #resize(newCapacity) {
        if (newCapacity === this.capacity) return;

        const newArray = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
        this.capacity = newCapacity;
    }

    #grow() {
        this.capacity *= 2;
        this.#resize(this.capacity);
    }

    #shrink() {
        if (this.capacity / 2 < this.length) return;
        this.capacity = Math.max(DEFAULT_CAPACITY, Math.floor(this.capacity / 2));
        this.#resize(this.capacity);
    }

    push(element) {
        if (this.length === this.capacity) {
            this.#grow();
        }
        this.array[this.length] = element;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Array is empty');
        }
        const element = this.array[this.length - 1];
        this.length--;

        if (this.length < this.capacity / 4) {
            this.#shrink();
        }
        return element;
    }

    insert(index, element) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }

        if (this.length === this.capacity) {
            this.#grow();
        }

        for (let i = this.length; i > index; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[index] = element;
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        const element = this.array[index];
        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;

        if (this.length < this.capacity / 4) {
            this.#shrink();
        }
        return element;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        return this.array[index];
    }

    set(index, element) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        this.array[index] = element;
    }

    indexOf(element) {
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === element) {
                return i;
            }
        }
        return -1;
    }

    contains(element) {
        return this.indexOf(element) !== -1;
    }

    clear() {
        this.array = new Array(DEFAULT_CAPACITY);
        this.length = 0;
        this.capacity = DEFAULT_CAPACITY;
    }

    toArray() {
        return this.array.slice(0, this.length);
    }

    toString() {
        return this.array.slice(0, this.length).join(', ');
    }
}

const customArray = new CustomArray();
customArray.push(5);
customArray.push(2);
customArray.push(3);

console.log(customArray.toArray()); // [1, 2, 3]

