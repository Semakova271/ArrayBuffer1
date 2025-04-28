const Character = require('./Character'); 

class Magician extends Character {
    constructor(baseAttack) {
        super(baseAttack);
        this.distance = 1; 
    }

    get attack() {
        return this.calculateAttack(this.distance);
    }

    calculateAttack(distance) {
        let attack = super.calculateAttack(distance); 
        if (this.stoned) {
            attack -= Math.log2(distance) * 5; 
        }
        return Math.max(0, attack); 
    }

    set attack(value) {
        this.baseAttack = value;
    }
}

module.exports = Magician; 