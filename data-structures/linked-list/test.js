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
});
