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

    set attack(value) {
        this._attack = value;
    }

    get attack() {
       return this.baseAttack;
    }
    
  calculateAttack(distance) {
        this.distance = distance;
        let attack = this.baseAttack;

         const linearReduction = Math.max(0, 1 - (distance - 1) * 0.1);
        attack *= linearReduction;

        return attack;
    }
}

module.exports = Character;
