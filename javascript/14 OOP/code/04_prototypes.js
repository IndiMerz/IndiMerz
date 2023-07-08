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
