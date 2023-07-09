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


// Getters and setters with object constructor

function Animal (name, type) {
    this._name = name;
    this._type = type;

    Object.defineProperty(this, 'name', {
        get: function(){
            return this.capFstLett(this._name);
        },
        set: function(value){
            this._name = value;
        }
    });

    Object.defineProperty(this, 'type', {
        get: function(){
            return this.capFstLett(this._type);
        },
        set: function(value){
            this._type = value;
        }
    });

    Object.defineProperty(this, 'detail', {
        get: function(){
            return `${this.name} is a ${this._type} animal`;
        }
    });
}

Animal.prototype.capFstLett = function (value){
    return value.charAt(0).toUpperCase() + value.slice(1)
}

const creature = new Animal('lion', 'wild');
console.log(creature);
console.log(creature.name);
console.log(creature.type);
console.log(creature.detail);


// Getters and setters with object literal

const AnimalObj = {
    _name: 'Horse',
    _type: 'Domestic',

    get name() {
        return Animal.prototype.capFstLett(this._name);
    },

    set name(value) {
        return this._name = value;
    },

    get type() {
        return Animal.prototype.capFstLett(this._type);
    },

    set type(value) {
        return this._type = value;
    }
}


const creature2 = Object.create(AnimalObj);
console.log(creature2);
console.log(creature2.name);
console.log(creature2.type);