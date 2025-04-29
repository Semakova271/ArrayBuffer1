const Character = require('./Character'); 

class Daemon extends Character {
    constructor(baseAttack) {
        super(baseAttack);
        this.distance = 1; 
    }

    get attack() {
        return this.calculateAttack(this.distance);
    }

    calculateAttack(distance) {
        let attack = this.baseAttack;

        // Уменьшение атаки в зависимости от расстояния
        const linearReduction = Math.max(0, 1 - (this.distance - 1) * 0.1);
        attack *= linearReduction;

        // Если персонаж "stoned", уменьшаем атаку на логарифм
        if (this.stoned) {
            attack -= Math.log2(this.distance) * 5; // Пример, как можно уменьшить атаку
            attack = Math.max(0, attack); // Убедимся, что атака не отрицательная
        }

        return attack;
}

module.exports = Daemon; 
