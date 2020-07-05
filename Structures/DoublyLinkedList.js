class _Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(values = []) {
    this.head = null;
    for (let newItem of values) {
      this.insertLast(newItem);
    }
  }

  find(item) {
    let currNode = this.head;

    while (currNode !== null) {
      if (currNode.value === item) return currNode;
      
      currNode = currNode.next;
    }
  }

  insertFirst(newItem) {
    this.head = new _Node(newItem, null, this.head);
  }

  insertLast(newItem) {   
    if (this.head === null) return this.insertFirst(newItem);

    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    currNode.next = new _Node(newItem, currNode);
  }

  insertBefore(item, newItem) {
    let foundNode = this.find(item);
    if (!foundNode) return;
    
    foundNode.prev.next = new _Node(newItem, foundNode.prev, foundNode);
  }

  insertAfter(item, newItem) {
    let foundNode = this.find(item);
    if (!foundNode) return;

    foundNode.next = new _Node(newItem, foundNode, foundNode.next);
  }

  insertAt(item, newItem) {
    let foundNode = this.find(item);
    if (!foundNode) return;

    foundNode.prev.next = new _Node(newItem, foundNode.prev, foundNode.next);
  }

  remove(item) {
    let foundNode = this.find(item);
    if (!foundNode) return;

    foundNode.next.prev = foundNode.prev;
    foundNode.prev.next = foundNode.next;
  }

}

module.exports = DoublyLinkedList;s