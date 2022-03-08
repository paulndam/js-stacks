// creating a stack

class Stack {
  constructor() {
    // initialize the empty stack array
    this.items = [];
  }

  // save element into stack

  push(element) {
    this.items.push(element);
  }
  // remove element from top of stack
  pop() {
    this.items.pop();
  }
  // look at the top element in stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if stack is empty by its length.
  isEmpty() {
    return this.items.length === 0;
  }

  isStackLength() {
    return this.items.length;
  }

  clear() {
    this.items = [];
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
    binaryString += convertStack.pop();
  }

  return binaryString;
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
stack.push("E");
stack.push("F");
console.log(stack);
console.log(stack.peek());
console.log(stack.isStackLength());
stack.pop();
console.log(stack.isStackLength());
console.log(stack);

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));
