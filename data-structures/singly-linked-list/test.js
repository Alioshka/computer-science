'use strict';

const { SinglyLinkedList } = require('./index');

describe(`SinglyLinkedList`, () => {
    let list;
    beforeEach(() => {
       list = new SinglyLinkedList();
    });

    test(`should push data to the list`, () => {
        list.push('HELLO');
        list.push('AND');
        list.push('GOODBYE');
        list.push("!");
        expect(list.head.val).toEqual('HELLO');
        expect(list.tail.val).toEqual('!');
        expect(list.tail.next).toEqual(null);

        expect(list.head.next.val).toEqual('AND');
        expect(list.head.next.next.val).toEqual('GOODBYE');
        expect(list.head.next.next.next.val).toEqual('!');
    });

    test(`should push2 data to the list`, () => {
        list.push2('HELLO');
        list.push2('AND');
        list.push2('GOODBYE');
        list.push2("!");
        expect(list.head.val).toEqual('HELLO');
        expect(list.tail.val).toEqual('!');
        expect(list.tail.next).toEqual(null);

        expect(list.head.next.val).toEqual('AND');
        expect(list.head.next.next.val).toEqual('GOODBYE');
        expect(list.head.next.next.next.val).toEqual('!');
    });

    test(`should pop data from the list`, () => {
        list.push('HELLO');
        list.push("!");
        expect(list.head.val).toEqual('HELLO');
        expect(list.tail.val).toEqual('!');
        expect(list.tail.next).toEqual(null);
        expect(list.head.next.val).toEqual('!');

        let oldTail = list.pop();
        expect(oldTail.val).toEqual('!');

        expect(list.head.val).toEqual('HELLO');
        expect(list.head.next).toEqual(null);
        expect(list.tail.val).toEqual('HELLO');
    });

    test(`should shift data from the list`, () => {
        list.push('HELLO');
        list.push('Alex');
        list.push('!');


        let oldHead = list.shift();
        expect(oldHead.val).toEqual('HELLO');

        expect(list.head.val).toEqual('Alex');
        expect(list.head.next.val).toEqual('!');
        expect(list.tail.val).toEqual('!');
    });

    test(`should unshift data from the list`, () => {
        list.push('Alex');
        list.push('!');
        list.unshift('HELLO');

        expect(list.head.val).toEqual('HELLO');
        expect(list.head.next.val).toEqual('Alex');
        expect(list.head.next.next.val).toEqual('!');
        expect(list.tail.val).toEqual('!');
    });
});
