// 2-May-2021 

// BluePrint || Static Thing
class Queue {

    // FIFO = First In Fast Out | (Linear) Data-Structure

    constructor() {
        // empty queue
        this.queue = [];
    }

    // add new data in queue, one by one
    enqueue(data) {
        this.queue.push(data);
    }

    // remove data from queue, from front side
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

    // ########################################################
    // ########################################################
    // ########################################################

    // Object Creating || Dynamic Thing

    // Create an object of Queue class
    const numbers = new Queue();

    numbers.enqueue(2);
    numbers.enqueue(4);
    numbers.enqueue(6);
    numbers.enqueue(8);

    console.log(numbers.queue);
    // [ 2, 4, 6, 8 ]

    numbers.dequeue();
    console.log(numbers.queue);
    // [ 4, 6, 8 ]

    // ########################################################
    // ########################################################
    // ########################################################