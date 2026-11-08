let bankAccout={
    _owner: "Goga",
    _balance :2500,
    _pin: "1234",
    _isBlocked: false,
    get own1(){
        return this._owner
    },
    set own2(a){
        if(a){
            this._owner = a
        }
        else{
            console.log('Invalid owner name!')
        }
    }
    ,get balg(){
        return this._balance
    },
    set bals(a){
        if(typeof a === 'number'&& a>0){
            this._balance = a
        }
        else{
            console.log('Invalid balance')
        }
    },
    get ping(){
        return 'PIN is hidden'
    },
    set pins(a){
        if(a.length === 4){
            this._pin = a
        }
        else{
            console.log('Invalid "PIN must contain exactly 4 digits!"')
        }
    },
    get accountStatus(){
        return this._isBlocked?'Blocked':'Active'
    },
    set deposit(a){
        if(this.accountStatus === 'Blocked'){
            console.log("Account is blocked!")
        }
        else{
            if(typeof a === 'number'){
                this._balance+=a
            }
            else{
                console.log("Invalid deposit amount!")
            }
        }
    },
    set withdraw(a){
        if(this.accountStatus === 'Blocked'){
            console.log("Account is blocked!")
        }
        else{
            if(typeof a === 'number' && a <= this._balance){
                this._balance-=a
            }
            else{
                console.log("Insufficient balance!")
            }
        }
    }
}
console.log(bankAccout.own1)
bankAccout.own2 = 'nino'
console.log(bankAccout.own1)
console.log(bankAccout.balg)
bankAccout.bals = -2 
console.log(bankAccout.balg)
console.log(bankAccout.ping)
bankAccout.pins = '4412'
console.log(bankAccout.ping)
console.log(bankAccout.accountStatus)
bankAccout.deposit ='212'
bankAccout.withdraw = 22
// 
// 
// 
// 
// 
// 
let player = {
    _name: 'shadow',
    _health: 100,
    _energy: 80,
    _level: 1,
    _experience: 0,
    _isAlive: true,
    get nameg(){
        return this._name
    },
    set names(a){
        if(a.length>3 && typeof a === 'string'){
            this._name =a
        }
        else{
            console.log("Name must contain at least 3 characters!")
        }
    },
    get healg(){
        return this._health
    },
    set heals(a){
        if(a >=0 && a <= 100){
            this._health=a
            if(this._health === 0){
                this._isAlive = false
            }    
            else if(this._health > 0){
                this._isAlive = true
            }
        }
        else{
            console.log("Invalid health!")
        }
    },
    get energ(){
        return this._energy
    },
    set eners(a){
        if(a >=0 && a<= 100){
            this._energy = a
        }
        else{
            console.log("Invalid energy!")
        }
    },
    get exp(){
        return this._experience
    },
    set exps(a){
        if(a >= 0 && typeof a === 'number'){
            this._experience+=a
            while (this._experience > 100){
                this._experience -= 100
                this._level++
            }
        }
    },
    get level(){
        return this._level
    }
    ,get status(){
        if(this._isAlive && this._energy > 0){
            return 'Ready'
        }
        else if(this._isAlive === false){
            return 'Dead'
        }
        else if(this.enery === 0){
            return "Exhausted"
        }
    },
    set attack(a){
        if (this._isAlive && a>0){
            if(a<this._energy){
                console.log('Attack sucsessful')
                this._energy-=a
            }
            else{
                console.log('Not enough energy!')
            }
        }
    }
}
console.log(player.nameg)
player.names = 'brittan'
console.log(player.nameg)
console.log(player.healg)
player.heals = 20
console.log(player.healg)
console.log(player.exp)
player.exps = 212
console.log(player.exp)
console.log(player.level)
console.log(player.status)
player.attack = 30
// 
// 
// 
// 
let storeAccount ={
    _username: 'Goga',
    _email: 'goa@gmail.com',
    _balance: 1800,
    _password: 'goga1234',
    _isActive: true,
    _loginAttempt: 0,
    get name(){
        return this._name
    },
    set names(a){
        if(typeof a === 'string',a.length>3){
            this._name = a
        }
        else{
            console.log('Invalid username')
        }
    },
    get email(){
        return this._email
    },
    set smail(a){
        if(typeof a ==='string', a.includes('@'),a.slice(a.length-4,a.length) === '.com'){
            this._email = a
        }
        else{
            console.log('Invalid email')
        }
    },
    get pass(){
        return this._password
    },
    set passs(a){
        if(a.length > 7, typeof a ==='string',a.includes('0123456789')){
            this._password=a
        }
        else{
            console.log('weak password')
        }
    },
    get accountStatus(){
        if(this._isActive){
            return 'Account is Active'
        }
        else{
            return 'Account is inactive'
        }
    },
    set login(a){
        if(this._isActive){
            if(a === this._password){
                console.log("Login sucsessful")
                this._loginAttempt = 0
            }
            else{
                this._loginAttempt++
                console.log('inaccurate password')
                if(this._loginAttempt >= 3){
                    this._isActive = false
                }
            }
        }
        else{
            return 'Account is inactive'
        }
    }, 
    set purchase(a){
        if(typeof a ==='number' && a>0){
            if(this._isActive){
                if(a<this._balance){
                    this._balance -=a
                    console.log('Purchase sucsessful')
                    if(this._balance < 100){
                        console.log('Low balance warning!')
                    }
                }
                else{
                    console.log('insufficient funds')
                }
            }
            else{
                console.log('Account is inactive')
            }
        }
    },
    set addBal(a){
        if(typeof a ==='number' && a>0){
            if(this._isActive){
                this._balance += a
            }
            else{
                console.log('Account is inactive')
            }
        }
        else{
            console.log('Invalid amount!')
        }
    }
}
console.log(bankAccout.name)
bankAccout.names= 'luka'
console.log(bankAccout.email)
storeAccount.smail = 'gio@gmail.com'
console.log(bankAccout.pass)
bankAccout.passs = 'gwvvdass'
console.log(bankAccout.accountStatus)
bankAccout.login = 'goga1234'
bankAccout.purchase = 333
bankAccout.addBal = -132