/*
  With a set, you want to put in a value to check later if it's in the collection.
  You are going to watch a sufficiently large array to assure you don't have collisions. I did 255
  to start with. When added, use a hashing function to hash the string and put in your table.
  The class should have three functions:

  add -   function - takes a string as an input, hashes it, and puts in its table
  check - function - takes a string and returns true if it exists in its table; otherwise returns false
  hash -  function - takes a string and a max number and return a number between 0 and the max number
                     function must be idempotent; the same string and max number will always yield the
                     same output
*/

class HashTableSet {
    constructor() {
        this.table = new Array(255);
    }
    add(input) {
        this.table[this.hash(input, 255)] = input;
    }
    check(input) {
        return !!this.table[this.hash(input, 255)];
    }
    hash(input, max) {
        let num = 0;
        for (let i = 0; i < input.length; i++) {
            num += input.charCodeAt(i) * i;
        }
        return num % max;
    }
}

test();

function test(){
    const table = new HashTableSet();
    table.add('hi');
    table.add('this is fun');
    table.add('another thing');

    console.log(table.check('this is fun')); // true
    console.log(table.check('this is not fun')); // false
}