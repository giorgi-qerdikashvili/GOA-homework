let player = {
    _name: "Shadow",
    _level: 15,
    _experience: 850,
    _health: 75,
    _isOnline: true,
    get name(){
        if(this._name.length < 3){
            return "Invalid name!"
        }
        else{
            return this._name
        }
    },
    get level(){
        return this._level >=10?"Advanced Player": this._level>=5?"Intermediate Player":"Beginner Player"
    },
    get status(){
        return this._health ===0?"Player is dead":this._health>30?"Critical condition":"Player is healthy"
    }
}
console.log(player.name)
console.log(player.level)
console.log(player.status)
let obi = {
    name: 'gio',
    _email: 'reta@gmail',
    _password:'334_adsafdsa',
    set name(nname){
        this.name = nname
    },
    set email(nmail){
        this._email = nmail
    },
    set pass(pass){
        this._password = pass
    },
    get nname(){
        return this.name
    },
    get nmail(){
        return this._email
    },
    get npass(){
        return this._password
    }
}
console.log(obi.name('lisa'))
console.log(obi.email('gea@gmail'))
console.log(obi.pass('44ge24'))
console.log(obi.nmail)
console.log(obi.npass)
console.log(obi.nname)