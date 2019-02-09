'use strict';

const src = require('./index');

Object.entries(src).forEach(entry => {
    let fnName, fn;
    [fnName, fn] = entry;

    describe(`Given nums = [2, 7, 11, 15], target = 9
              Because nums[0] + nums[1] = 2 + 7 = 9`, () => {
        test(`${fnName} return [0, 1]`, () => {
            const nums = [2, 7, 11, 15];
            const target = 9;

            expect(fn(nums, target)).toEqual([0, 1]);
        });
    });

    describe(`Given nums = [3,2,4], target = 6
              Because nums[1] + nums[2] = 2 + 4 = 6`, () => {
        test(`${fnName} return [1,2]`, () => {
            const nums = [3, 2, 4];
            const target = 6;

            expect(fn(nums, target)).toEqual([1,2]);
        });
    });

    describe(`Given nums = [1,2,3,9], target = 8
              Because no such nums to satisfy condition`, () => {
        test(`${fnName} return []`, () => {
            const nums = [1,2,3,9];
            const target = 8;

            let result = fn(nums, target) || []; // this line is needed because of strange jest error
            // function return [], but jest bind it as undefined
            expect(result).toEqual([]);
        });
    });

    describe(`Given nums = [1,2,4,4], target = 8
              Because nums[2] + nums[3] = 4 + 4 = 8`, () => {
        test(`${fnName} return [2,3]`, () => {
            const nums = [1,2,4,4];
            const target = 8;

            expect(fn(nums, target)).toEqual([2,3]);
        });
    });
});