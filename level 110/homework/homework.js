let company = {
    name: "TechVision",
    founded: 2010,

    headquarters: {
        country: "Georgia",
        city: "Tbilisi",

        address: {
            street: "Chavchavadze",
            building: {
                number: 25,
                floors: 8,

                departments: {
                    firstFloor: {
                        name: "Reception",
                        employees: 4
                    },

                    fifthFloor: {
                        name: "Development",
                        employees: 35,

                        manager: {
                            name: "Giorgi",
                            age: 32,

                            contact: {
                                email: "giorgi@techvision.com",
                                phone: "555123456"
                            }
                        }
                    }
                }
            }
        }
    },

    projects: {
        project1: {
            name: "Website",
            budget: 15000,

            team: {
                leader: "Nika",
                members: 8,

                technology: {
                    frontend: "React",
                    backend: "Node.js",
                    database: "MongoDB"
                }
            }
        },

        project2: {
            name: "Mobile App",
            budget: 25000,

            team: {
                leader: "Ana",
                members: 12,

                technology: {
                    frontend: "React Native",
                    backend: "Python",
                    database: "PostgreSQL"
                }
            }
        }
    }
}
console.log(company.name,company.founded)
console.log(company.headquarters.city,company.headquarters.country)
console.log(company.headquarters.address.building.floors,company.headquarters.address.building.number)
console.log(company.headquarters.address.building.departments.firstFloor.name,company.headquarters.address.building.departments.firstFloor.employees)
console.log(company.headquarters.address.building.departments.fifthFloor.name,company.headquarters.address.building.departments.fifthFloor.employees)
console.log(company.headquarters.address.building.departments.fifthFloor.manager.name,company.headquarters.address.building.departments.fifthFloor.manager.age)
console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.email,company.headquarters.address.building.departments.fifthFloor.manager.contact.phone)
console.log(company.projects.project1.name,company.projects.project1.budget,company.projects.project1.team.leader)
console.log(company.projects.project2.team.members,company.projects.project2.team.technology.database)
console.log(company.projects.project2.team.technology.frontend,company.projects.project2.team.technology.backend,company.projects.project2.team.technology.database)
// 
// 
// 
company.name='TechWorld'
company.headquarters.city = 'Batumi'
company.headquarters.address.building.number=40
company.headquarters.address.building.floors=10
company.headquarters.address.building.departments.firstFloor.employees=7
company.headquarters.address.building.departments.fifthFloor.name ='Software Development'
company.headquarters.address.building.departments.fifthFloor.manager.age=35
company.headquarters.address.building.departments.fifthFloor.manager.contact='599123456'
company.projects.project1.budget=20000
company.projects.project2.team.leader='Giorgi'
company.projects.project2.team.members=15
company.projects.project1.team.technology.frontend='Vue.js'
company.projects.project1.team.technology.database='MySQL'
// 
// 
// 
company.employees=150
company.headquarters.postalCode='0108'
company.headquarters.address.building.hasElevator=true
company.headquarters.address.building.departments.firstFloor.phone='0322000000'
company.headquarters.address.building.departments.fifthFloor.budget=50000
company.headquarters.address.building.departments.fifthFloor.manager.salary=6000
company.headquarters.address.building.departments.fifthFloor.manager.contact.linkedIn='giorgi-techvision'
company.projects.project1.team.designer='Mariam'
company.projects.project2.team.technology.testing='Jest'
company.projects.project2.status='In Progress'
// 
// 
// 
delete company.founded
delete company.headquarters.country
delete company.headquarters.address.building.floors
delete company.headquarters.address.building.departments.firstFloor.employees
delete company.headquarters.address.building.departments.fifthFloor.manager.age
delete company.headquarters.address.building.departments.fifthFloor.manager.phone
delete company.projects.project1.team.technology.database
delete company.projects.project2.team.members
delete company.projects.project1.budget
delete company.projects.project2.team.technology.backend
// 
// 
// 
// 
// 
let player = {
    name: "Shadow",
    health: 100,
    energy: 80,
    level: 1
}
player.showInfo = function() {
    console.log(player.name,player.health,player.energy,player.level)
}
player.takeDamage = function(amount){
    player.health -= amount
}
player.heal = function(amount){
    player.health += amount
}
player.levelUp = function(){
    player.level++
}
player.useEnergy = function(amount){
    player.energy -= amount
}
player.takeDamage(20)
player.heal(10)
player.levelUp()
player.showInfo()
//  
// 
// 
let bankAccount = {
    owner: "Goga",
    balance: 1500,
    currency: "GEL"
}
bankAccount.showBalance=function(){
    console.log(bankAccount.owner,bankAccount.balance)
}
bankAccount.deposit=function(a){
    bankAccount.balance+=a
}
bankAccount.withdraw=function(a){
    bankAccount.balance < a? bankAccount.balance-=a : console.log("Not enough money!")
}
bankAccount.showInfo=function(){
    console.log(bankAccount.owner,bankAccount.balance,bankAccount.currency)
}
// 
// 
// 
let product = {
    name: "Laptop",
    price: 2500,
    quantity: 10
}
product.showInfo=function(){
    console.log(product.name,product.price,product.quantity)
}
product.calculateTotal=function(){
    console.log(product.price*product.quantity)
}
product.sell=function(a){
    product.quantity < a? product.quantity-=a:console.log('NOT ENOUGH ITMES')
}
product.restock=function(a){
    product.quantity+=a
}
product.changePrice=function(newPrice){
    product.price=newPrice
}
// 
// 
// 
let car = {
    brand: "BMW",
    model: "M5",
    speed: 0,
    fuel: 60
}
car.showInfo=function(){
    console.log(car.brand,car.model,car.speed,car.fuel)
}
car.acceleration=function(a){
    car.speed+=a
    car.fuel-=a/10
}
car.break=function(a){
    car.speed-=a
}
car.drive=function(dist){
    car.fuel<dist?car.fuel-=dist:console.log('out of fuel')
}
// 
// 
// 
let student = {
    name: "Nika",
    scores: [85, 90, 70, 100]
}
student.showScores=function(){
    console.log(student.name,student.scores)
}
student.addScore=function(sc){
    student.scores.push(sc)
}
student.calculateAverage=function(){
    console.log(student.scores.reduce((a,b)=>a+=b))
    return student.scores.reduce((a,b)=>a+=b)
}
student.getHighestScore=function(){
    console.log(student.scores.reduce((a,b)=>a<b?a=b:a=a))
    return student.scores.reduce((a,b)=>a<b?a=b:a=a)
}
student.getLowestScore=function(){
    console.log(student.scores.reduce((a,b)=>a>b?a=b:a=a))
    return student.scores.reduce((a,b)=>a>b?a=b:a=a)
}
// 
// 
// 
let aplayer = {
    name: "Shadow",
    health: 100,
    attack: 25
}
let enemy = {
    name: "Dragon",
    health: 150,
    attack: 20
}
aplayer.showInfo=function(){
    console.log(aplayer.name,aplayer.health,aplayer.attack)
}
aplayer.attackEnemye=function(en){
    aplayer.health<en?aplayer.health-=en:console.log('you died')
}