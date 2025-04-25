const Character = require('../Character');
const Magician = require('../Magician');
const Daemon = require('../Daemon');

describe('Character', () => {
    it('should calculate attack damage based on distance', () => {
        const char = new Character(100);
        expect(char.calculateAttack(1)).toBe(100); 
        expect(char.calculateAttack(2)).toBeCloseTo(90, 2); 
        expect(char.calculateAttack(11)).toBe(0); 
    });
});

describe('Magician', () => {
    it('should calculate attack damage with stone effect', () => {
        const magician = new Magician(100);
        magician.distance = 2;
        magician.stoned = true;
        expect(magician.attack).toBeCloseTo(85, 2); 
        magician.stoned = false;
        expect(magician.attack).toBeCloseTo(90, 2);
    });

    it('attack cannot be less than zero', () => {
        const magician = new Magician(10);
        magician.distance = 10;
        magician.stoned = true;
        magician.attack = 0;
        expect(magician.attack).toBe(0);
    });
});

describe('Daemon', () => {
    it('should calculate attack damage with stone effect', () => {
        const daemon = new Daemon(100);
        daemon.distance = 2;
        daemon.stoned = true;
        expect(daemon.attack).toBeCloseTo(85, 2); 
        daemon.stoned = false;
        expect(daemon.attack).toBeCloseTo(90, 2);
    });

    it('attack cannot be less than zero', () => {
        const daemon = new Daemon(10);
        daemon.distance = 10;
        daemon.stoned = true;
        daemon.attack = 0;
        expect(daemon.attack).toBe(0);
    });

});