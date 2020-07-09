class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//First in first out
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = node.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

//-----Helper Functions-----

function peek(queue) {
  if (queue.first === null) {
    return;
  }
  return queue.first.value
}

function isEmpty(queue) {
 return queue.first === null;
}

function display(queue) {
  if (queue.first === null) return;
  let builder = '';
  let current = queue.first;

  builder += current.value;

  while (current.next !== null) {
    current = current.next;
    builder += ' -> ' + current.value;
  }
  builder += ' -> tail';
  console.log(builder);
  return;
}

function size(queue) {
  if (queue.first === null) {
    return 0;
  }
  let size = 0;
  let current = queue.first;
  while (current !== null) {
    current = current.next;
    size++
  }
  return size;
}

module.exports = {
  Queue,
  peek,
  isEmpty,
  display,
  size
};