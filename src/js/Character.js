class Character {
    constructor(baseAttack) {
        this.baseAttack = baseAttack;
        this.stoned = false;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    
    calculateAttack(distance) {
        let attack = this.baseAttack;

       
        const linearReduction = Math.max(0, 1 - (distance - 1) * 0.1); 

        attack *= linearReduction;

        return attack;

    }

    get attack() {
        return this.baseAttack; 
    }

    set attack(value) {
        this.baseAttack = value;
    }
}

module.exports = Character; 
