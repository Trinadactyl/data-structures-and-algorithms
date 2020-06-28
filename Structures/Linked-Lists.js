class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

//Stored in non contiguous blocks of memory
class LinkedList {
  constructor() {
    this.head = null;
  }

  //Set value as the first value of the LL, aka the Head
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  //Add a value to the end of the LL
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head;
      //Loop through nodes until one has no next value
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      //Link new node to last by setting next val
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item, newItem) {
    let currNode = this.head;
    let prevNode = this.head;
    
    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = new _Node(newItem, currNode)
  } 

  insertAfter(item, newItem) {
    let currNode = this.find(item);
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    currNode.next = new _Node(newItem, currNode.next)
  }

  insertAt(position, newItem) {
    let currNode = this.head;
    let currPosition = 1;
    let prevNode = this.head;

    if (!this.head) {
      console.log(`Cannot insert as ${position}`);
      return null;
    }

    while (currPosition !== position) {
      if (currNode.next === null) {
        console.log(`Cannot insert as ${position}`);
        return null;
      }
      else {
        prevNode = currNode;
        currNode = currNode.next;
        currNode++;
      }
    }
    if (position === 1) {
      this.head = new _Node(newItem, currNode.next);
    }
    else {
      prevNode.next = new _Node(newItem, currNode.next);
    }
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
}   

//---Helper functions---//