'use strict';

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowestElementIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowestElementIndex]){
                lowestElementIndex = j;
            }

        }
        if(i !== lowestElementIndex){
            let temp = arr[i];
            arr[i] = arr[lowestElementIndex];
            arr[lowestElementIndex] = temp;
        }
    }
    return arr;
}

module.exports = {
    selectionSort
};
