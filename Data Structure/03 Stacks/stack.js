class Stack {
	constructor() {
		this._items = [];
		this._count = 0;
	}

	push(item) {
		this._items[this._count] = item;
		this._count++;
	}

	pop() {
		if (this.isEmpty()) {
			return 'Undefined';
		}

		const item = this._items[this._count - 1];
		this._count--;

		for (let i = this._count; i < this._items.length; i++) {
			this._items[i] = this._items[i + 1];
		}

		this._items.length = this._count;
		return item;
	}

	peek() {
		if (this.isEmpty()) {
			return 'No Item in Stack';
		}

		return this._items[this._count - 1];
	}

	isEmpty() {
		return this._items.length === 0;
	}

	size() {
		return this._items.length;
	}

	clear() {
		this._items = [];
		this._count = 0;
	}
}

const myStack = new Stack();

myStack.push('Item 1');
myStack.push('Item 2');
myStack.push('Item 3');
myStack.push('Item 4');
myStack.push('Item 5');

myStack.pop();
myStack.pop();

myStack.clear();

console.log('Top Item: ' + myStack.peek());
console.log('Stack Size: ' + myStack.size());
console.log(myStack);
