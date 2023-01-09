const Dragon = require("./dragon.js");

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis){
        super(name, color)
        this.evilDoings = evilDoings
        this.nemsis = nemesis
    }
}

module.exports = EvilDragon;