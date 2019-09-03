'use strict';

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function addToTheEnd(node, val){
 if(node.next){
     addToTheEnd(node.next, val);
 } else {
     node.next = val;
 }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            addToTheEnd(this.head, newNode);
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

module.exports = {
    SinglyLinkedList
};

// var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("AND");
// list.push("GOODBYE");
// list.push("!");
