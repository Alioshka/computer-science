'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }
    }
    find(value) {
        return searchNode(this.root, value);
    };
}

function insertNode(node, newNode) {
    if (newNode.value < node.value) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}

function searchNode(node, value) {
    if (node === null) {
        return false;
    }
    if (value < node.value) {
        return searchNode(node.left, value);
    } else if (value > node.value) {
        return searchNode(node.right, value);
    } else {
        return node;
    }
}


//      10
//   5     13
// 2  7  11  16

// let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(11);
// tree.insert(2);
// tree.insert(16);
// tree.insert(7);
//
// let find;
// find = tree.find(13);
// find = tree.find(7);
// find = tree.find(9); // false
// find = tree.find(10); // false
