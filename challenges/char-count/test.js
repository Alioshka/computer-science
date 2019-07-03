'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`${fnName} `, () => {
        let input = 'Hello, my friends !';
        let output = {
            "h": 1,
            "e": 2,
            "l": 2,
            "o": 1,
            ",": 1,
            " ": 3,
            "m": 1,
            "y": 1,
            "f": 1,
            "r": 1,
            "i": 1,
            "n": 1,
            "d": 1,
            "s": 1,
            "!": 1
        };
        let input2 = 'Greetings from the interview';
        let output2 = {
            "g": 2,
            "r": 3,
            "e": 5,
            "t": 3,
            "i": 3,
            "n": 2,
            "s": 1,
            " ": 3,
            "f": 1,
            "o": 1,
            "m": 1,
            "h": 1,
            "v": 1,
            "w": 1
        };

        test(`perform correct char count`, () => {
            expect(fn(input)).toEqual(output);
        });

        test(`perform correct char count`, () => {
            expect(fn(input2)).toEqual(output2);
        });

        test(`perform correct char count`, () => {
            expect(fn(input)).not.toEqual(output2);
        });
    });
});
