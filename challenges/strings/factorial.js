// https://en.wikipedia.org/wiki/Factorial
// 5! = 5*4*3*2*1 = 120

function factorial(num) {
    let result = 1;

    for(let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(5));

function factorial2(num) {
    if (num < 2) {
        return 1;
    }

    return (num * factorial2(num - 1));
}
console.log(factorial2(5));
