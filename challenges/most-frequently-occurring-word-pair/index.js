// Given the following string:
//     "I want to be a part of it New York, New York."
// Find the most frequently occurring word pair.
//
// A word pair is defined as adjacent words separated by a space.
// "I want" is the first word pair and it occurs only once.
//
// Expected Result from above string is the word pair "New York" which occurs twice.

function find(string){
    let newString = string.replace(/[^a-zA-Z0-9 ]/g , '');
    let array = newString.split(' ');
    let storage = {};
    let count = 0;
    let wordPair = '';
    for(let i = 0; i < array.length -1; i++){
        let key = array[i] + ' ' + array[i + 1];
        if(storage[key]){
            storage[key] = storage[key] + 1;
        } else {
            storage[key] = 1;
        }
        if(storage[key] > count){
            count = storage[key];
            wordPair = key;
        }
    }
    return wordPair;
}

find('I want to be a part of it New York, New York.');
