class Rectangle {
	constructor(name, width, height) {
		this.name = name;
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return 2 * (this.width + this.height);
	}

	isSquare() {
		return this.width === this.height;
	}

    // we can also access methond under class
	logArea() {
		console.log('Area: ' + this.area());
	}
}

const rect = new Rectangle('rect1', 30, 20);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());

rect.logArea()



// Class Inheritance

// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
    }
    logName(){
        console.log('Shape Name: ' + this.name);
    }
}

// Sub Class
class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    logName(){
        console.log('Square Name: ' + this.name);
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    logName(){
        console.log('Circle Name: ' + this.name);
    }
}

const sq = new Square('square 1', 8);
const cir = new Circle('circle 1', 5);

console.log(sq);
console.log(cir);

sq.logName()
cir.logName()

console.log(sq instanceof Shape);  // true
console.log(sq instanceof Square); // true


// Static Class
class Parallelogram {
    constructor(name, base, height) {
        this.name = name;
        this.base = base;
        this.height = height;
    }

    area(){
        return this.base * this.height;
    }

    static getClass() {
        return 'Parallelogram'
    }

}

const pGram = new Parallelogram('p1', 20, 30);

console.log(pGram.area()); 
console.log(Parallelogram.getClass()); 




// this and bind()

class App {
    constructor () {
        this.server = 'localHost';

        document
            .querySelector('button')
            .addEventListener('click', this.getServerName.bind(this))
            // to use this method, we need to add bind ()
    }

    getServerName() {
        console.log(this.server);
    }
}

const app = new App();
app.getServerName();
