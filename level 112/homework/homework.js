let employees = [
    { name: "Giorgi", salary: 2500, department: "IT" },
    { name: "Nino", salary: 1800, department: "HR" },
    { name: "David", salary: 3200, department: "IT" },
    { name: "Maka", salary: 1500, department: "Sales" },
    { name: "Saba", salary: 2800, department: "Sales" }
]
employees.forEach(a=>console.log(a.name,a.salary))
employees.forEach(a=>a.department === "IT"? console.log(a.name):null)
employees.forEach(a=>a.salary > 2000? console.log(a.name):null)
console.log(employees.filter(a=>a.department === 'Sales').length)
let um = 0
employees.forEach(a=>{
    um+= a.salary
})
console.log(um)
// 
// 
// 
// 
let books = [
    { title: "Harry Potter", price: 35, pages: 320 },
    { title: "The Hobbit", price: 28, pages: 280 },
    { title: "Atomic Habits", price: 45, pages: 250 },
    { title: "The Alchemist", price: 20, pages: 190 },
    { title: "Clean Code", price: 55, pages: 450 }
]
books.forEach(a=>console.log(a.title))
books.forEach(a=>a.price > 30?console.log(a.title):null)
books.forEach(a=>a.pages > 300?console.log(a.title):null)
um=0
books.forEach(a=>a.price > 40?um++:null)
console.log(um)
um=0
let sump = books.reduce((a,b)=>{
    console.log(a,b.price)
    return a + b.price
},0)
let l1 = []
books.forEach(a=>a.pages > 300? l1.push(a.title):null)
console.log(l1)
// 
// 
// 
// 
let players = [
    { name: "Sandro", sport: "Football", goals: 12 },
    { name: "Elene", sport: "Tennis", goals: 8 },
    { name: "Lasha", sport: "Football", goals: 19 },
    { name: "Tako", sport: "Basketball", goals: 15 },
    { name: "Data", sport: "Football", goals: 6 }
]
um = 0
um2 = 0
let topPLayers={}
players.forEach(a=>{
    console.log(a.name,a.sport)
    if(a.sport==='Football'){
        console.log(a.name)
        um++
    }
    if(a.goals>10){
        console.log(a.name,a.goals)
        topPLayers[a.name]=a.goals
    }
    um2 += a.goals
})
console.log(um,um2)
// 
// 
// 
// 
let pending = 0
let expensiveOrders = []
um = 0
let orders = [
    { id: 101, customer: "Nika", total: 250, status: "delivered" },
    { id: 102, customer: "Ana", total: 80, status: "pending" },
    { id: 103, customer: "Gio", total: 420, status: "delivered" },
    { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
    { id: 105, customer: "Luka", total: 310, status: "pending" }
]
orders.forEach(a=>{
    console.log(a.id,a.customer)
    if(a.status === 'delivered'){
        console.log(a)
    }
    if(a.id > 200){
        console.log(a)
    }
    if(a.status ==='pending'){
        pending++
    }
    if(a.total > 200&&a.status === 'delivered'){
        expensiveOrders.push(a)
    }
    um+=a.total
})
console.log(pending,um,expensiveOrders)
// 
// 
// 
// 
let products = [
    { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
    { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
    { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
    { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
    { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
    { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
    { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
]
l1 = products.filter(a=>{
    if(a.price>200&&a.stock>5&&a.rating>=4.5){
        return a
    }
})
console.log(l1)
l1.forEach(a=>console.log(`${a.name} costs ${a.price}, Rating: ${a.rating}`))
console.log(l1.length)
// 
// 
// 
// 
products = [
    { name: "Laptop", price: 2500, rating: 4.8 },
    { name: "Mouse", price: 80, rating: 3.5 },
    { name: "Keyboard", price: 180, rating: 4.6 },
    { name: "Monitor", price: 900, rating: 4.2 },
    { name: "Headphones", price: 350, rating: 4.9 },
    { name: "Tablet", price: 1200, rating: 3.8 }
]
l1 = products.filter(a=>{
    if(a.price>100){
        return a
    }
})
l1.forEach(a=>{
    console.log(a.name,a.price)
    a.rating>=4.5?console.log('Excellent'):console.log('Good')
    console.log(a.name,a.price,a.rating)
})
// 
// 
// 
// 
// 
let students = [
    { name: "Nika", score: 95, attendance: 92 },
    { name: "Mariam", score: 65, attendance: 85 },
    { name: "Giorgi", score: 82, attendance: 70 },
    { name: "Ana", score: 45, attendance: 95 },
    { name: "Luka", score: 90, attendance: 88 },
    { name: "Elene", score: 75, attendance: 96 }
]
l1 = students.filter(a=>{
    if(a.score>=70){
        return a
    }
})
l1.forEach(a=>{
    console.log(a.name,a.score)
    a.score>90?console.log('Excellent'):console.log('Passed')
    a.attendance>90?console.log('Good attendance'):console.log('Low attendence')
    console.log(`${a.name} - Score: ${a.score} - ${a.score>90?'Excellent':'Passed'} - ${a.attendance>90?'Good attendance':'Low attendence'}`)
})
// 
// 
// 
// 
employees = [
    { name: "Nika", department: "IT", salary: 3500, experience: 4 },
    { name: "Ana", department: "HR", salary: 2200, experience: 2 },
    { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
    { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
    { name: "Luka", department: "IT", salary: 4200, experience: 1 },
    { name: "Elene", department: "HR", salary: 3000, experience: 4 }
]
l1 = employees.filter(a=>{
    if(a.department ==='IT'&&a.salary>2500){
        return a
    }
})
l1.forEach(a=>{
    console.log(a)
    a.experience>=3?console.log('Bonus eligable'):console.log('No bonus')
    if(a.salary>4000){
        console.log('High salary')
    }
    else{
        console.log('Regular salary')
    }
    console.log(`${a.name} - Salary: ${a.salary} - ${a.experience>=3?'Bonus eligable':'No bonus'} - ${a.salary>4000?'High salary':'Regular salary'}`)
})
// 
// 
// 
// 
let characters = [
    { name: "Shadow", level: 15, health: 85, damage: 70 },
    { name: "Blaze", level: 8, health: 95, damage: 45 },
    { name: "Storm", level: 20, health: 60, damage: 90 },
    { name: "Frost", level: 12, health: 80, damage: 65 },
    { name: "Titan", level: 25, health: 100, damage: 55 },
    { name: "Raven", level: 18, health: 40, damage: 85 }
]
l1 = characters.filter(a=>{
    if(a.level>10&&a.damage>60){
        return a
    }
})
l1.forEach(a=>{
    console.log(a)
    a.health>=80?console.log('Healthy'):console.log('Weak')
    a.damage>80?console.log('Powerful'):console.log('Normal')
    if(a.health<50){
        console.log('"Warning: Low health!"')
    }
    else{
        console.log("Health is stable")
    }
    console.log(`${a.name} - ${a.health>=80?'Healthy':'Weak'} - ${a.damage>80?'Powerful':'Normal'} - ${a.health<50?"Warning: Low health!":"Health is stable"}`)
})
// 
// 
// 
// 
um = 0
let athletes = [
    { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
    { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
    { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
    { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
    { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
    { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
    { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
    { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
]
l1 = athletes.filter(a=>{
    if(a.sport === 'Swimming'&&a.medals){
        return a
    }
})
l1.forEach(a=>{
    console.log(a)
    a.score>90?console.log('Excellent'):a.score>80?console.log('Good'):console.log('Needs improvement')
    if(a.medals>5){
        console.log('More than 5 medals')
    }
    else{
        console.log('less than 5 medals')
    }
})
l1.forEach(a=>{
    um+=a.score
})
console.log(um)
console.log(l1.length)