class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//Last in, first out
class Stack {
  constructor(top) {
    this.top = null;
  }

  //add data to top
  push(value) {
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    const node = new _Node(value, this.top);
    this.top = node;
    return node;
  }

  //remove datat from top
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

//-----Helper functions--------------

function peek(stack) {
  if (stack.top === null) {
    return 'Stack is empty';
  }
  return stack.top.value;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  currNode = stack.top;
  let result = [];
  result.push(currNode.value)
  while (currNode.next !== null) {
    currNode = currNode.next;
    result.push(currNode.value)
  }
  console.log(result)
}

//-----------------------------------------------