let createCharecter = (name,health,damage)=>{
    return{
        name,
        health,
        damage,
        attack(target){
            return target.health<=damage?'"Target is already defeated!"':target.health-damage
        },
        heal(amount){
            if(health + amount < 101){
                health+=amount
                return health
            }
            else{
                return 'max hp'
            }
        },
        getStatus(){
            return name + ' '+  health +" "+ damage
        }
    }
}
let p1 = createCharecter('leo' , 900 , 200)
let p2 = createCharecter('sozar', 2000, -20)
let p3 = createCharecter('nia', 200, 999)
console.log(p3.attack(p2))
console.log(p2.getStatus())
console.log(p1.heal(200))
// 
// 
// 
// 
// 
// 
let createBankAccount=(owner, balance, pin)=>{
    return{
        owner,
        deposit(a){
            if(a>0){
                balance+=a
            }
        },
        widhDraw(a,epin){
            if(epin === pin){
                if(a < balance){
                    balance-=a
                }
                else{
                    return 'Not enough money'
                }
            }
            else{
                return 'incorrect pin'
            }
        },
        getBalance(){
            return balance
        },
        changePin(old,npin){
            if(old === pin){
                if(npin.length === 4){
                    pin === npin
                }
            }
            else{
                return 'Incorrect pin'
            }
        }
    }
}
let l1 = createBankAccount('lizi',20002,'3548')
l1.deposit(300)
console.log(l1.widhDraw(2200, '4837'))
console.log(l1.getBalance())
l1.changePin('3548','1223')
let l2 = createBankAccount('wiz', 22, '1123')
l2.deposit(50000)
console.log(l2.widhDraw(22,'1223'))
console.log(l2.getBalance())
l2.changePin('1223','7726')
// 
// 
// 
// 
let sum = 0
let createStudent=(name, age, grades)=>{
    return{
        name,
        age,
        grades,
        addGrades(grade){
            if(grade > 0 && grade<101){
                grades.push(grade)
            }
        },
        getResult(){
            for(let i of grades){
                sum+=i
            }
            if(sum>89){
                return'Exellent'
            }
            else if(sum>69){
                return 'good'
            }
            else if(sum>49){
                return 'average'
            }
            else{
                return 'Failed'
            }
        },
        getInfo(){
            return `${name}, ${age}, ${sum / grades.length}, ${this.getResult()}`
        }
    }
}
l1 = createStudent('ronald', 23, [42,55,1])
l1.addGrades(2)
console.log(l1.getResult())
console.log(l1.getInfo())   
l2 = createStudent('saba', 22, [1,5,3,2,6,2,5,21])
l2.addGrades(23)
console.log(l2.getResult())
console.log(l2.getInfo())
l3 = createStudent('niak', 51, [1,2,52,21])
l3.addGrades(23)
console.log(l3.getResult())
console.log(l3.getInfo())
// 
// 
// 
// 
// 
// 
// 
let createCart=()=>{
    return{
        items: [],
        addProduct(name,price,quantity){
            let nin = true
            for(let i of this.items){
                if(i[0] === name){
                    nin = false
                    i[2]+=quantity
                }
            }
            if(nin){
                this.items.push([name,price,quantity])
            }
        },
        removeProduct(name){
            for(i of this.items){
                if(i[0] === name){
                    this.items.splice(this.items.indexOf(i),1)
                }
            }
        },
        increaseQuantity(name, quantity){
            for(i of this.items){
                if(i[0] === name){
                    i[2]+= quantity
                }
            }
        },
        getTotal(){
            sum=0
            for(i of this.items){
                sum += i[1]*i[2]
            }
            return sum
        },
        getCartInfo(){
            return this.items
        }
    }
}
l1 = createCart()
l1.addProduct('car',122,2)
l1.addProduct('car',123,55)
l1.removeProduct('car')
console.log(l1.getCartInfo())
console.log(l1.getTotal())
l2 = createCart()
l2.addProduct('berry',22,3)
l2.addProduct('cherry',52,3222)
console.log(l2.getTotal())
console.log(l2.getCartInfo())
// 
// 
// 
// 
//
// 
let createEmployee=(name,position,salary,experience)=>{
    return{
        name,
        position,
        salary,
        experience,
        increaseSalarayAmount(a){
            if(this.experience > 5){
                this.salary += a
            }
            else{
                return 'not enough experience'
            }
        },
        changePositon(newPosition){
            if(this.experience > 1){
                this.position = newPosition
            }
        },
        getBonus(){
            if(this.experience >10){
                return 2000
            }
            else if(this.experience > 4){
                return 1000
            }
            else{
                return 500
            }
        },
        getInfo(){
            return name + ' ' + position + ' ' + salary +  " " + experience
        }
    }
}
l1 = createEmployee('lisa', 'manager',2003,2)
l1.increaseSalarayAmount(22)
l1.changePositon('cashier')
console.log(l1.getBonus())
console.log(l1.getInfo())
l2 = createEmployee('nika', 'manager',23,12)
l2.increaseSalarayAmount(22)
l2.changePositon('regulator')
console.log(l2.getBonus())
console.log(l2.getInfo())
l3 = createEmployee('nuna', 'cashier',2,23)
l3.increaseSalarayAmount(22)
l3.changePositon('fridge')
console.log(l3.getBonus())
console.log(l3.getInfo())