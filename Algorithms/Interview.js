const Array = require('../Structures/Arrays/Array')
const Stack = require('../Structures/Stacks-and-Queues/Stack')
const Queue = require('../Structures/Stacks-and-Queues/Queue');
const HashMap = require('../Structures/HashMap');

function removeDuplicates(str) {
  let output = '';
  const map = new HashMap()

  for (let i=0; i<str.length; i++) {
    map.set(i, str[i]);
    //console.log(map)
  }
  for (let i=0; i<str.length; i++) {
    if (!output.includes(map.get(i))) {
      output += str[i]
    }  
  }
  return map
}

console.log(removeDuplicates('google all that you think can think of'))