'use strict';

const src = require('./index');

Object.entries(src).forEach(([fnName, fn]) => {
    describe(`${fnName} print correct steps`, () => {
        beforeEach(() => {
            jest.spyOn(console, 'log');
        });

        afterEach(() => {
            console.log.mockRestore();
        });

        test(`${fnName} called with n = 2`, () => {
            fn(2);
            expect(console.log.mock.calls[0][0]).toEqual(' # ');
            expect(console.log.mock.calls[1][0]).toEqual('###');
            expect(console.log.mock.calls.length).toEqual(2);
        });

        test(`${fnName} called with n = 3`, () => {
            fn(3);
            expect(console.log.mock.calls[0][0]).toEqual('  #  ');
            expect(console.log.mock.calls[1][0]).toEqual(' ### ');
            expect(console.log.mock.calls[2][0]).toEqual('#####');
            expect(console.log.mock.calls.length).toEqual(3);
        });

        test(`${fnName} called with n = 4`, () => {
            fn(4);
            expect(console.log.mock.calls[0][0]).toEqual('   #   ');
            expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
            expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
            expect(console.log.mock.calls[3][0]).toEqual('#######');
            expect(console.log.mock.calls.length).toEqual(4);
        });
    });
});