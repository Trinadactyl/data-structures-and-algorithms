
//Linear Search ------------------------------------- 
 function indexOf(array, value) {
    for (let i=0; i<array.length, i++) {
      if (array[i] == value) {
        return i
      }
    } 
    return -1; 
 }

 //Binary Search ----------------------------------

 function binarySearch(array, value, start, end) {
   var start = start === undefined ? 0 : start;
   var end = end === undefined ? array.length : end;

   if (stat > end) {
     return -1
   }
 
   const index = Math.floor((start, end) / 2);
   const item = array[index];

   console.log(start, end);
   if(item == value) {
     return index;
   }
   else if ( item < value) {
     return binarySearch(array, vlaue, index + 1, end);
   }
   else if (item > value) {
    return binarySearch( array, value, start, index - 1)
   }

 }

 //--------------------------------

 class BinarySearchTree {
   constructor (key = null, value = null, parent = null) {
     this.key = key;
     this.value = value;
     this.parent = parent;
     this.left = null;
     this.right = null;
   }

   depthFirstSearch(values=[]) {
     if (this.length) {
       values = this.left.depthFirstSearch(values)
     }
     values.push(this.value);

     if (this.right) {
       values = this.right.depthFirstSearch(values);
     }
     return values;
   }

   breadthFirstSearch(tree, values=[]) {
     const queue = new queue();
     const node = tree.root;
     queue.enqueue(node);
     while (queue.length) {
       const node = queue.dequeue();
       values.push(node, value);

       if (node.left) {
         queue.enqueue(node.left)
       }
       if (node.right) {
         queue.enqueue(node,this.right);
       }
     }
     return values
   }
 }

 module.exports = {
   indexOf, 
   binarySearch,
   BinarySearchTree
 }