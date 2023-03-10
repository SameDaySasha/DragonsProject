const Dragon = require("./dragon.js");

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis){
        super(name, color)
        this.evilDoings = evilDoings
        this.nemsis = nemesis
    }
}

module.exports = EvilDragon;
const Dragon = require("./dragon.js");

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    this.evilDoings.forEach((action) => {
      console.log(`${this.name} will ${action}`);
    });
  }
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}
module.exports = EvilDragon;
