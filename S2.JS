// Implementing a stack in an Object based

class Stack {
  constructor() {
    // help keep track of the size of the stack and also for adding and removing elements.
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count++] = element;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let objStr = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objStr = `${objStr},${this.items[i]}`;
    }
    return objStr;
  }
}

function decimalToBinary(decimalNum) {
  const convertStack = new Stack();
  let number = decimalNum;
  let remainder;
  let binaryString = "";

  while (number > 0) {
    remainder = Math.floor(number % 2);
    convertStack.push(remainder);
    number = Math.floor(number / 2);
  }

  // pop all element from stack until its empty
  while (!convertStack.isEmpty()) {
    // then concatenate all elements that were removed from stack and display in a string
    binaryString += convertStack.pop().toString();
  }

  return binaryString;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
console.log(stack.size());
stack.pop();
console.log(stack);
stack.push(6);
console.log(stack);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.toString());
// console.log(stack.clear());
// console.log(stack.size());

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));
