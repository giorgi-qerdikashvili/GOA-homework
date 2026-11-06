let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
]
let l1 = students.filter(a=>a.active)
students.forEach(a=>{
    console.log(a.name,a.score)
})
let l2 = students.map(a=>`${a.name}, ${a.score>50?'Passed':"Failed"}`)
console.log(students.findIndex(a=>a.name === 'Mariam'))
console.log(students.some(a=>a.score>90))
console.log(students.every(a=>a.age>15))
// 
// 
// 
// 
let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
]
l1 = products.filter(a=>a.stock>0)
l1.forEach(element => {
    console.log(element.name,element.price)
});
l2 = l1.map(a=>{
    a.price+= 100
    return a
})
console.log(l2.findIndex(a=>a.name === 'Headphones'))
console.log(l2.some(a=>a.price>2000))
console.log(l2.every(a=>a.stock>0))
// 
// 
// 
// 
let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
]
l1=characters.filter(a=>a.health>0)
l1.forEach(a=>console.log(a.name,a.health))
l2=l1.map(a=>{
    a.health += 20
    return a.name ,a.health
})
console.log(characters.findIndex(a=>a.name==='Wizard'))
console.log(l2.some(a=>a.level>18))
console.log(l2.every(a=>a.health>0))
// 
// 
// 
// 
let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
]
l1=employees.filter(a=>a.department==='IT')
employees.forEach(a=>console.log(a.name,a.salary))
l2=employees.map(a=>{
    if(a.experience>4){
        a.salary+=500
    }
    else{
        a.salary+=200
    }
    return a
})
console.log(employees.findIndex(a=>a.salary>4000))
console.log(employees.some(a=>a.experience>6))
console.log(employees.every(a=>a.salary>1000))
// 
// 
// 
// 
// 
let orders = [
    { id: 101, customer: "Nika", total: 350, delivered: true },
    { id: 102, customer: "Ana", total: 120, delivered: false },
    { id: 103, customer: "Gio", total: 750, delivered: true },
    { id: 104, customer: "Mariam", total: 90, delivered: false },
    { id: 105, customer: "Luka", total: 500, delivered: true },
    { id: 106, customer: "Saba", total: 220, delivered: false }
]
l1=orders.filter(a=>a.delivered)
l1.forEach(a=>console.log(a.id,a.customer))
l2=l1.map(a=>{
    a.total+= 50
    return a
})
console.log(l2.findIndex(a=>a.id===104))
console.log(l2.some(a=>a.total >699))
console.log(l2.some(a=>a.total > 100))
// 
// 
// 
// 
let movies = [
    { title: "Avatar", rating: 8.5, year: 2009, watched: true },
    { title: "Titanic", rating: 7.9, year: 1997, watched: true },
    { title: "Joker", rating: 8.4, year: 2019, watched: false },
    { title: "Inception", rating: 9.0, year: 2010, watched: true },
    { title: "Venom", rating: 6.5, year: 2021, watched: false },
    { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
]
l1 = movies.filter(a=>a.rating>8)
movies.forEach(a=>console.log(a.title,a.year))
l2=l1.map(a=>`${a.title} - ${a.rating}`)
console.log(movies.findIndex(a=>a.title === 'Interstellar'))
console.log(movies.some(a=>!a.watched))
console.log(movies.every(a=>a.rating>6))