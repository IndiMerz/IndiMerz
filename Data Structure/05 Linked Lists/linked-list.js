class Node {
	constructor(value) {
		this._value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this._head = null;
		this._length = 0;
	}

	// Insert First Node
	insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
    }

	// Insert Last Node
    insertLast(value){
        const newNode = new Node(value);
        let current = this._head;

        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this._length++;
    }

	// Insert at index
    insertAt(value, index) {
        if (index > this._length){
            return;
        }

        if (index === 0){
            this.insertFirst(value);
            return;
        }

        const newNode = new Node(value);
        let current, previous;
        current = this._head;
        let count = 0;

        while (count < index){
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this._length++;
    }

	// Get at Index
    getAt(index) {
        let current = this._head;
        let count = 0;

        while (current){
            if (count === index){
                return current._value;
            }
            count++;
            current = current.next;
        }
        return null;
    }

	// Remove at Index
    removeAt(index){
        if (index > this._length){
            return;
        }

        let current = this._head;
        let previous;
        let count = 0;

        if (index === 0) {
            this._head = current.next;
        } else {
            while (count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this._length--;
    }

	// Print List Data
    printListData() {
        let current = this._head;
        let list = '';

        while (current) {
            list += current._value + ' ';
            current = current.next;
        }

        return list;
    }

	// Clear List
    clear() {
        this._head = null;
        this._length = 0;
    }
}

const list = new LinkedList();
list.insertFirst(100);
list.insertAt(200, 1);
list.insertAt(300, 2);
list.insertAt(400, 3);
list.insertLast(45);

list.removeAt(2);
list.removeAt(1);

list.clear();

console.log(list.getAt(0));
console.log(list.getAt(1));
console.log(list.getAt(2));
console.log(list.getAt(3));
console.log(list.getAt(4));


console.log(list.printListData());
