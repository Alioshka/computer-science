let someArray = [1, 3, 6, 10];

function sum(array){
    return array
        .reduce((a,b) => a + b);
}

console.log(sum(someArray));