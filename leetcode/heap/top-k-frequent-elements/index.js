// https://leetcode.com/problems/top-k-frequent-elements/discuss/480532/javascript-hash-map-max-heap-priority-queue-solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // results array
    let results = [];

    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(n), where n is nums.length
    let map = {};
    nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);

    let pq = new PriorityQueue();
    // 2) enqueue each map element to max binary heap priority queue
    for(let key in map){
        pq.enqueue(key, map[key]);
    }

    // 3) k times dequeue element from priority queue and push it to results array
    for(let i = 0; i < k; i++){
        results.push(pq.dequeue());
    }

    // return results array
    return results;
};

class PriorityQueue {
    constructor(){
        this._values = [];
    }

    enqueue(val, priority){
        this._values.push(new Node(val, priority));
        this._traverseUp();
    }

    dequeue(){
        const max = this._values[0];
        const end = this._values.pop();
        if(this._values.length > 0){
            this._values[0] = end;
            this._traverseDown();
        }
        return max.val;

    }

    _traverseUp(){
        let idx = this._values.length - 1;
        const el = this._values[idx];
        while(idx > 0){
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this._values[pIdx];
            if(el.priority <= parent.priority) break;
            this._values[pIdx] = el;
            this._values[idx] = parent;
            idx = pIdx;
        }
    }

    _traverseDown(){
        let leftChildIdx = null;
        let rightChildIdx = null;
        let leftChild = null;
        let rightChild = null;
        let swapIdx = null;

        let idx = 0;
        const el = this._values[idx];
        while(true){
            swapIdx = null;
            leftChildIdx = 2 * idx + 1;
            rightChildIdx = 2 * idx + 2;

            if(leftChildIdx < this._values.length){
                leftChild = this._values[leftChildIdx];
                if(leftChild.priority > el.priority){
                    swapIdx = leftChildIdx;
                }
            }

            if(rightChildIdx < this._values.length){
                rightChild = this._values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority > el.priority) ||
                    (swapIdx !==null && rightChild.priority > leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if(swapIdx === null) break;
            this._values[idx] = this._values[swapIdx];
            this._values[swapIdx] = el;
            idx = swapIdx
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
