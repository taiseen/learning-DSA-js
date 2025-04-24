const DEFAULT_CAPACITY = 10;


class CustomArray {
    constructor(capacity = DEFAULT_CAPACITY) {
        this.capacity = capacity;
        this.length = 0;
        this.array = new Array(capacity);
    }


    // insert data at last position of array
    // Time complexity: O(1)   
    push(value) {
        this.array[this.length] = value; // insert at the end of array
        this.length++; // increase length of array
    }

    // insert data at specific index of array
    // Time complexity: O(n)
    insert(index, value) {

        console.log("\nBefore :-  ", this.array);

        // Thinking 1: Index validation
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }

        // Thinking 2. Capacity check (optional: to prevent overflow)
        if (this.length >= this.capacity) {
            throw new Error("Array is full");
        }

        // Thinking 3: index is last position of array
        if (index === this.length) {
            return this.push(value);
        }

        // Thinking 4: Shift elements to right side from the end to index
        // this loop only use for data traversing + shifting, not for data Insert. 
        // So, we need to insert value after this loop.
        // Time complexity: O(n)
        for (let i = this.length; i > index; i--) {
            // empty space in array = inset data
            this.array[i] = this.array[i - 1]; // data shift into right

            console.log(`Array[${i}] :-`, this.array);
        }

        // Thinking 5. Insert value
        // Time complexity: O(1)
        this.array[index] = value;

        // Thinking 6. Update length
        this.length++;
    }
}

const array = new CustomArray();
array.push(10);
array.push(20);
// array.push(30);
// array.push(40);
// array.push(50);

array.insert(0, 99);
// array.insert(0, 19);
// array.insert(0, 59);



console.log('\n==================================================');
console.log('Array :-', array.array);
console.log('Length :-', array.length);
console.log('Capacity :-', array.capacity, '\n');
console.log(JSON.stringify(array.array, undefined, 2)); // [1, <9 empty items>]
