class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

//Nodes stored in non contiguous blocks of memory
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
    //store the first and previous nodes as vaiables
    let currNode = this.head;
    let prevNode = this.head;
    
    //loop through the nodes until value matches item input
    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    //stop execution if it doesn't exist
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    //prevNode now points to node being inserted
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

    //stop execution if LL is empty
    if (!this.head) {
      console.log(`Cannot insert as ${position}`);
      return null;
    }
    //Loop through nodes until position is reached
    while (currPosition !== position) {
      //stop if position is never reached
      if (currNode.next === null) {
        console.log(`Cannot insert as ${position}`);
        return null;
      }
      else {
        prevNode = currNode;
        currNode = currNode.next;
        currPosition++;
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

function display(SLL) {
  let currNode = SLL.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next
  }
}

function size(SLL) {
  let counter = 0;
  let currNode = SLL.head;

  while (currNode !== null) {
    counter ++;
    currNode = currNode.next;
  }
  return counter;
}

function isEmpty(SSL) {
  return SSL.head === null;
}

function findPrevious(SSL, item) {
  let currNode = SSL.head;
  let prevNode = SSL.head;

  while (currNode.next !== null && currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  if (currNode.value !== item) {
    console.log('Item not found');
    return;
  } 
  else {
    return prevNode;
  }
}

function findLast(SSL) {
  let currNode = SSL.head;

  while (currNode !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function reverseList(SSL) {
  let currNode = SSL.head;
  let prevNode = SSL.head;

  while (currNode !== null) {
    console.log(currNode.value)
    let nextNode = currNode.next;
    if (currNode === SSL.head) {
      currNode.next = null;
    }
    else {
      currNode.next = prevNode;
    }
    SSL.head = currNode;
    prevNode = currNode;
    currNode = nextNode;
  }
}

function thirdFromEnd(SLL) {
  // exit if no items in list
  if (SLL.head === null) return;

  // need at least 3 items to work
  let listSize = size(SLL);
  if (listSize < 3) return;

  // set target position and loop through nodes
  let targetPosition = listSize - 2; // (third from last)
  let targetCounter = 1;
  let currNode = SLL.head;
  while (currNode !== null) {
    if (targetCounter === targetPosition) return currNode;
    targetCounter++;
    currNode = currNode.next;
  }

}

function findMiddle(SLL) {
  let targetPosition = Math.ceil(size(SLL)/2);
  console.log(targetPosition)
  let targetCounter = 0;
  let currNode = SLL.head;
  while (currNode !== null) {
    targetCounter++;
    if (targetCounter === targetPosition) {
      return currNode
    } 
    currNode = currNode.next
  }
}

function doesItCycle(SLL) {
  let currNode = SLL.head
  let counter = 0
  while (currNode !== null) {
    let otherNode = SLL.head
    let otherCounter = 0
    while (otherCounter < counter) {
      if (currNode.next === otherNode) {
        return true;
      }
      otherNode = otherNode.next;
      otherCounter++;
    }
    currNode = currNode.next;
    counter++
  }
  return false
}


module.exports =  {
  LinkedList,
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverseList,
  thirdFromEnd,
  findMiddle,
  doesItCycle
};