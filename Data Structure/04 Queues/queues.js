class Queue {
    constructor () {
        this._items = [];
        this._count = 0;
        this._front = 0;
    }

    enqueue(item) {
        this._items[this._count] = item;
        this._count++;
    }

    dequeue() {
        if (this.isEmpty()){
            return undefined;
        }

        const item = this._items[this._front];

        for (let i = this._front; i < this._count - 1; i++){
            this._items[i] = this._items[i + 1];
        }
        this._count--;
        this._items.length = this._count;
        return item;
    }

    peek() {
        if (this.isEmpty()){
            return 'No Item is in the Queue';
        }

        return this._items[this._front];
    }

    size() {
		return this._items.length;
	}

    clear() {
		this._items = [];
        this._front = 0;
        this._count = 0;
	}

    isEmpty() {
        return this._items.length === 0;
    }
}

const myQueue = new Queue();

myQueue.enqueue('Item 1');
myQueue.enqueue('Item 2');
myQueue.enqueue('Item 3');
myQueue.enqueue('Item 4');
myQueue.enqueue('Item 5');

myQueue.dequeue();
myQueue.dequeue();

myQueue.clear();

console.log('Front Item: ' + myQueue.peek());
console.log('Queue Length: ' + myQueue.size());
console.log(myQueue);