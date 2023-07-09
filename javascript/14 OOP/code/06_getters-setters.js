// Getters and setters with classes
class Person {
    constructor (fName, lName){
        this._fName = fName;
        this._lName = lName;
    }

    get fName() {
        return this.capitaliseFirstLetter(this._fName);
    }

    set fName(value) {
        this._fName = this.capitaliseFirstLetter(value);
    }

    get lName() {
        return this.capitaliseFirstLetter(this._lName);
    }

    set lName(value) {
        this._lName = this.capitaliseFirstLetter(value);
    }

    get fullName (){
        return `${this.fName} ${this.lName}`
    }

    capitaliseFirstLetter(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const peep1 = new Person('diethard', 'brockmann');

console.log(peep1.fName);
console.log(peep1.lName);

peep1.fName = 'patrick'
peep1.lName = 'lewis'

console.log(peep1.fullName);

console.log(peep1);
