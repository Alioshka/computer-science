/*

Binary Search Tree

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
        }
        else {
            let current = this.root;
            while(true) {
                if (current.value > value) {
                    // go left
                    if (current.left) {
                        current = current.left;
                    }
                    else {
                        current.left = new Node(value);
                        break;
                    }
                }
                else {
                    // go right
                    if (current.right) {
                        current = current.right;
                    }
                    else {
                        current.right = new Node(value);
                        break;
                    }
                }
            }
        }
        return this;
    }
}

class Node {
    constructor(value=null, left=null, right=null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

test();

function test(){
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const tree = new Tree();
    nums.map( num => tree.add(num));
    console.log(tree);
}
/**
        3
1               7
    2       4       10
              6    9
            5     8

 */