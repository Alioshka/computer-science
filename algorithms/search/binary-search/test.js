'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const arr = [2,5,6,9,13,15,28,30];
    const states = [
        'Alabama','Alaska','American Samoa','Arizona','Arkansas',
        'California','Colorado','Connecticut','Delaware','District of Columbia',
        'Federated States of Micronesia','Florida','Georgia','Guam',
        'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
        'Kentucky','Louisiana','Maine','Marshall Islands','Maryland',
        'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
        'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',
        'North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma',
        'Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
        'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
        'Washington','West Virginia','Wisconsin','Wyoming'];
    test(`${fnName} return -1 if element not exist in array`, () => {
        const elem = 103;

        expect(fn(arr, elem)).toEqual(-1);
    });

    test(`${fnName} return index of element in array`, () => {
        const elem = 13;

        expect(fn(arr, elem)).toEqual(4);
    });

    test(`${fnName} return index of element in array`, () => {
        const elem = 'Virgin Island';
        expect(fn(states, elem)).toEqual(53);
    });

    test(`${fnName} return -1 if element not exist in array`, () => {
        const elem = 'Barbados';
        expect(fn(states, elem)).toEqual(-1);
    });

});
