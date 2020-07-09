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

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reverseStr = '';
  const stack = new Stack;

  for (let char of str) {
    stack.push(char)
  }
  display(stack);

  while(stack.top) {
    reverseStr += stack.pop()
  }
  return str === reverseStr;
}

//Checks whether parenthesis are correctly paired
  //needs fixing I think
function matchingParens(exp) {
  const stack = new Stack;
  let currParen;
  const tracker = {
    open: 0,
    close: 0
  }

  for (let char of exp) {
    if (char === '(' || char === ')') {
      stack.push(char);
    }
  }
  while (stack.top) {
    currParen = stack.pop()
    if (currParen === ')') {
      tracker.close++
    }
    else {
      tracker.open++
    }
    if (tracker.open > tracker.close) {
      console.log('open:', tracker.open)
      console.log('close:', tracker.close)
      console.log(`Missing ')'`)
      return false;
    }
    console.log('open:', tracker.open)
    console.log('close:', tracker.close)
    return true;
  }
}

function sortStack(stack) {
  let tempStack = new Stack;
  let temp;

  //iterate oer stack
  while (stack.top !== null) {

    //move first val in stack to temp var
    temp = stack.pop()

    while (!isEmpty(tempStack) && peek(tempStack) > temp) {
      stack.push(tempStack(pop()))
    }

    tempStack.push(temp)
  }
  display(tempStack)

  while (tempStack.top !== null) {
    stack.push(tempStack.pop())
  }
  display(stack)
}

//-----------------------------------------------

module.exports = {
  Stack,
  peek,
  isEmpty,
  display,
  isPalindrome,
  matchingParens,
  sortStack
}