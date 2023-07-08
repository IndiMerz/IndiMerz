function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
}

// Adding Prototypes
Rectangle.prototype.area = function () {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
    return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
    return this.name = newName;
};


const rect = new Rectangle('Reactangle 1', 40, 20);
console.log(Object.getPrototypeOf(rect));


console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(rect.changeName('notSquare'));


// another way (Object.create)

const cuboidPrototypes = {
    volume: function(){
        return this.width * this.breadth * this.height ;
    },
    area: function(){
        return 2 * (this.width * this.height + this.width * this.breadth + this.breadth * this.height);
    },
    isCube: function(){
        return this.width === this.height && this.height === this.breadth && this.width === this.breadth ;
    }
}

function createCuboid(width, breadth, height) {
    return Object.create(cuboidPrototypes, {
        width: {
            value: width
        },
        breadth: {
            value: breadth
        },
        height: {
            value: height
        }
    })
}

const cuboid = createCuboid(2, 5, 3);
console.log(cuboid);
console.log(cuboid.volume());
console.log(cuboid.area());
console.log(cuboid.isCube());


// Prototypical Inheritance
function Shape(name) {
    this.name = name
}

Shape.prototype.logName = function (){
    console.log(`Shape Name: ${this.name}`);
}

// Creating Shapes

function Square(name, side) {
    Shape.call(this, name);

    this.side = side;
}
// Inherits Shape prototypes
Square.prototype = Object.create(Shape.prototype)

function Circle(name, radius){
    Shape.call(this, name);

    this.radius = radius;
}
// we can have so many logNames which will work differently
Square.prototype.logName = function (){
    console.log(`Square Name: ${this.name}`);
}

// Inherits Shape prototypes
Circle.prototype = Object.create(Shape.prototype)

// set prototype constructor
Square.prototype.constructor = Square
Circle.prototype.constructor = Circle

const sq = new Square('square 1', 5);
const cir = new Circle('circle 1', 8);

console.log(sq.constructor);
console.log(cir.constructor);

sq.logName()
cir.logName()
