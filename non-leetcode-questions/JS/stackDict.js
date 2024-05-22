
class StackDict {
  constructor() {
    this.items = {}; // Object to store items
    this.top = 0;    // Counter to keep track of the top of the stack
  }

  push(item) {
    this.items[this.top] = item; // Store the item at the current top position
    this.top++;                  // Increment top after pushing
  }

  pop() {
    if (this.top === 0) {
        return null; // If stack is empty, return null
    }

    this.top--;                      // Decrement top before popping
    const item = this.items[this.top]; // Get the item from the top position
    delete this.items[this.top];       // Remove the item from the object
    return item[1];                    // Return the second element of the tuple (the item)
  }
}


