// https://en.wikipedia.org/wiki/Factorial

function factorialize1(num) {
    if (num < 0) {
        return -1;
    }

    if (num <= 1) {
        return 1;
    }

    return (num * factorialize1(num - 1));
}
console.log(factorialize1(5));

function factorialize2(num) {
    let result = num;
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
console.log(factorialize2(5));

function factorialize3(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(factorialize3(5));