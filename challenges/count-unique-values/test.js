'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    const input1 = [99,1,99,2,3,4,4,3,2];
    const input2 = [7, 7, 7, 7, 7];
    const input3 = [65,7,7,7,65,7,7,7,7,7,7,65];
    const output1 = 5;
    const output2 = 1;
    const output3 = 2;
    describe(`Given ${fnName})`, () => {
        test(`${input1} = ${output1}`, () => {
            expect(fn(input1)).toEqual(output1);
        });

        test(`${input2} = ${output2}`, () => {
            expect(fn(input2)).toEqual(output2);
        });

        test(`${input3} = ${output3}`, () => {
            expect(fn(input3)).toEqual(output3);
        });
    });
});
