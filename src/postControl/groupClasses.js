module.exports = {
  
 Raid: class {
    constructor(leader, raid) {
        this.Guardians[0] = leader
        this.Name = raid
    }
    Guardians = ["OPEN", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN"];
    Type = "Raid"
},

 Strike: class {
    constructor(leader, strike) {
        this.Guardians[0] = leader
        this.Name = strike
    }
    Guardians = ["OPEN", "OPEN", "OPEN"]
    Type = "Strike"
},

 Casual: class {
    constructor(leader, casual) {
        this.Guardians[0] = leader
        this.Name = casual
    }
    Guardians = ["OPEN", "OPEN", "OPEN", "OPEN", "OPEN", "OPEN"];
    Type = "Casual"
},

 Comp: class {
    constructor(leader, comp) {
        this.Guardians[0] = leader
        this.Name = comp
    }
    Guardians = ["OPEN", "OPEN", "OPEN"]
    Type = "Comp"
}

}