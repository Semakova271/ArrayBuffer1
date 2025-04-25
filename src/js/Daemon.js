const Character = require('./Character'); 

class Daemon extends Character {
    constructor(baseAttack) {
        super(baseAttack);
        this.distance = 1; 
    }

    calculateAttack(distance) {
        let attack = super.calculateAttack(distance); 
        if (this.stoned) {
            attack -= Math.log2(distance) * 5; 
        }
        return Math.max(0, attack); 
    }

    get attack() {
        return this.calculateAttack(this.distance);
    }

    set attack(value) {
        this.baseAttack = value;
    }
}

module.exports = Daemon; 
