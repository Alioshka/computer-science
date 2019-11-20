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
    push2(val){
        let newNode = new Node(val);
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

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

}

module.exports = {
    SinglyLinkedList
};

// let list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("AND");
// list.push("GOODBYE");
// list.push2("!");
// console.log(list);
// list.unshift("New Head !!!");
// console.log(list);
// let node = list.get(2);
// console.log(node);
