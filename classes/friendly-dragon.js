const Dragon = require('./dragon.js')

class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals(){ /*
        this.lifeGoals.forEach( goal => {
            console.log(`${this.name} likes to
            ${goal}`)
        }
        ) */
        for(let i = 0; i < this.lifeGoals.length; i++)
    }
    helpsPeople(){

    }

}
console.log(FriendlyDragon)
module.exports = FriendlyDragon
