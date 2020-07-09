//Queue implementation using a stack

const { Stack } = require('./Stack');

class StackQueue {
  constructor() {
    this.first = null;
    this.last = null;
    //Stacks use Last in First out logic,
    //So 2 stacks are needed to implement First in First out logic of a queue
    this.mainStack = new Stack();
    this.tempStack = new Stack()
  }

  enqueue(item) {
    this.mainStack.push(item);
  }

  dequeue() {
    while (this.mainStack.top !== null) {
      this.tempStack.push(this.mainStack.pop());
    }
    const nextItem = this.tempStack.pop();

    while (this.tempStack.top !== null) {
      this.mainStack.push(this.tempStack.pop());
    }
    return nextItem;
  }
} 

module.exports = { StackQueue }