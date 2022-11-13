// 2-May-2021 

// BluePrint || Static Thing
class Stack {

    // LIFO = Last In Fast Out | (Linear) Data-Structure

    constructor() {
        // empty stack
        this.stack = [];
    }

    // add new data in stack, one by one
    add(data) {
        this.stack.push(data);
    }

    // remove data from stack
    remove() {

        // for checking, is stack empty or not... 
        if (this.stack.length) {

            return this.stack.pop();

        }

    }
}

// ########################################################
// ########################################################
// ########################################################

// Object Creating || Dynamic Thing

// Create an object of Stack class
const person = new Stack();

person.add('Sam');
person.add('Jon');
person.add('Ken');
person.add('Lee');

// total object calling [its not a good approach]
console.log(person)
//Stack { stack: [ 'Sam', 'Jon', 'Ken', 'Lee' ] }

// its a good approach
console.log(person.stack)
// [ 'Sam', 'Jon', 'Ken', 'Lee' ]


const getRemovedPerson = person.remove();
console.log(person)
console.log(person.stack)
console.log(getRemovedPerson)
// Stack { stack: [ 'Sam', 'Jon', 'Ken' ] }
// [ 'Sam', 'Jon', 'Ken' ]
// Lee

// ########################################################
// ########################################################
// ########################################################