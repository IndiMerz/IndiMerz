const rectangle = {
    name: 'Rectangle 1',
    width: 20,
    height: 50,
    area: function () {
        return this.width * this.height
    }
}
console.log(rectangle.area());


const rectangle2 = {
    name: 'Rectangle 2',
    width: 30,
    height: 60,
    area: function () {
        return this.width * this.height
    }
}
console.log(rectangle2.area());
