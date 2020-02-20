// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
//
//
//     Example:
//
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push({
        val: x,
        min: this.data.length ? Math.min(this.getMin(), x) : x
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.data.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.data[this.data.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
