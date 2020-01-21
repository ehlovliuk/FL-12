function Fighter(object) {
    const maxHp = object.hp;
    let currentHp = maxHp;
    let newHp;
    let wins = 0;
    let losses = 0;

    this.getName = function() {
        return object.name;
    }
    this.getDamage = function() {
        return object.damage;
    }
    this.getHealth = function() {
        return currentHp;
    }
    this.setHealth = function(newHp) {
        currentHp = newHp;
    }
    this.getStrength = function() {
        return object.strength;
    }
    this.getAgility = function() {
        return object.agility;
    }
    
    this.attack = function(defender) {
        let currentProbability = 100 - this.getStrength() - this.getAgility();
        let randomProbability = () => Math.floor(Math.random() * 101);

        if(currentProbability >= randomProbability()) {
            defender.dealDamage(this.getDamage());
            return console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`)
        } else {
            console.log(`${this.getName()} attack missed`)
        }
    }

    this.logCombatHistory = function() {
        return console.log(`Name: ${object.name}, Wins: ${wins}, Losses: ${losses}`)
    }

    this.heal = function(heal) {
        if(currentHp < maxHp) {
            newHp = currentHp + heal;
        } else {
            newHp = maxHp;
        }

        this.setHealth(newHp);
    }

    this.dealDamage = function(damage) {
        newHp = currentHp - damage;
        if(newHp <= 0) {
            newHp = 0;
        }

        this.setHealth(newHp);
    }

    this.addWin = function() {
        wins ++;
    }

    this.losses = function() {
        losses ++;
    }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20});

let battle = function(fighter1, fighter2) {
    if (!fighter1.getHealth()) {
        console.log(`${fighter1.getName()} is dead and can't fight`)
    } else if (!fighter2.getHealth()) {
        console.log(`${fighter2.getName()} is dead and can't fight`)
    } else {
        while (fighter2.getHealth() && fighter1.getHealth() ) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);

            if(fighter2.getHealth() === 0) {
                console.log(`${fighter1.getName()} has won`)
                fighter1.addWin();
                fighter2.losses();
                break;
            }
            if(fighter1.getHealth() === 0) {
                console.log(`${fighter2.getName()} has won`)
                fighter2.addWin();
                fighter1.losses();
                break;
            }
        }
    }
}