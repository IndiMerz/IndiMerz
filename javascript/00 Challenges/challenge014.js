// OOP challenge: make a xp and level up for players

function Player (name) {
    this.name = name;
    this.level = 1;
    this.points = 0;
}

Player.prototype.gainXP = function (xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.level++;
        this.points -= 10;
    }
    // abstraction
    console.log(this.describe());
};

Player.prototype.describe = function () {
    return `${this.name} is at level ${this.level} with ${this.points} experience points`;
};

const player1 = new Player('Alex')
const player2 = new Player('Henry')
const player3 = new Player('Ross')

player1.gainXP(2);
player2.gainXP(6);
player3.gainXP(5);

player1.gainXP(6);
player2.gainXP(3);
player3.gainXP(7);

player1.gainXP(5);
player2.gainXP(5);
player3.gainXP(2);

player1.gainXP(5);
player2.gainXP(6);
player3.gainXP(1);

player1.gainXP(4);
player2.gainXP(8);
player3.gainXP(7);

player1.gainXP(5);
player2.gainXP(3);
player3.gainXP(6);


// console.log(player1.describe());
// console.log(player2.describe());
// console.log(player3.describe());