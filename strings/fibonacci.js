// Fibonnaci's sequence:
// input    0 1 2 3 4 5 6  7  8  9 ...
// output   0 1 1 2 3 5 8 13 21 34 ...

// with loop
function fibonacci(n) {
    if(n === 0){
        return n;
    }
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));

// bad solution with recursion
function fibonacciBad(n) {
    if( n <= 1) {
        return n;
    } else {
        return fibonacciBad(n - 1) + fibonacciBad(n - 2);
    }
}

console.log(fibonacciBad(0));
console.log(fibonacciBad(1));
console.log(fibonacciBad(2));
console.log(fibonacciBad(3));
console.log(fibonacciBad(4));
console.log(fibonacciBad(5));