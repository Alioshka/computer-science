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

    breadFirstSearch(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    depthFirstSearchPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    depthFirstSearchPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    depthFirstSearchInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
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
// let bfs = tree.breadFirstSearch(); // [10, 5, 13, 2, 7, 11, 16]
// let dfpre = tree.depthFirstSearchPreOrder(); // [10, 5, 2, 7, 13, 11, 16]
// let dfpost = tree.depthFirstSearchPostOrder(); // [2, 7, 5, 11, 16, 13, 10]
// let dfin = tree.depthFirstSearchInOrder(); // [2, 5, 7, 10, 11, 13, 16]
// console.log(dfin);
