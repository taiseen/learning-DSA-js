const DEFAULT_SIZE = 7;

class SortedArray {
    constructor(size = DEFAULT_SIZE) {
        this.size = size;
        this.array = new Array(size);
        this.length = 0;
    }

    #resize(newSize) {
        if (newSize === this.size) return;

        const newArray = new Array(newSize);
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
        this.size = newSize;
    }

    #doubleSize() {
        this.size *= 2;
        return this.#resize(this.size);
    }

    #halfSize() {
        if (this.size / 2 < this.length) return;
        this.size /= parseInt(this.size / 2);
        return this.#resize(this.size);
    }

    insert(value) {
        if (this.length === this.size) {
            this.#doubleSize();
        }

        for (let i = this.length; i > 0; i--) {
            if (this.array[i - 1] <= value) {
                this.array[i] = value;
                this.length++;
                return;
            }
            this.array[i] = this.array[i - 1];
        }
        this.array[0] = value;
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }

        for (let i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.length--;

        if (this.length < this.size / 2) {
            this.#halfSize();
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        return this.array[index];
    }

    clear() {
        this.array = new Array(DEFAULT_SIZE);
        this.length = 0;
        this.size = DEFAULT_SIZE;
    }

    toArray() {
        return this.array.slice(0, this.length);
    }

    toString() {
        return this.array.slice(0, this.length).join(', ');
    }

    search(value) {
        let left = 0;
        let right = this.length - 1;

        while (
            left <= right &&
            this.array[left] <= value &&
            this.array[right] >= value
        ) {
            const mid = Math.floor((left + right) / 2);
            if (this.array[mid] === value) {
                return mid;
            } else if (this.array[mid] < value) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}

const sortedArray = new SortedArray();
sortedArray.insert(5);
sortedArray.insert(3);
sortedArray.insert(7);
sortedArray.insert(1);
sortedArray.insert(9);
sortedArray.insert(2);
sortedArray.insert(8);
sortedArray.insert(4);
sortedArray.insert(6);

console.log(sortedArray.array);
console.log('Length:', sortedArray.length);
console.log('Size:', sortedArray.size);