let products = [
    { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
    { name: "Phone", price: 1800, category: "Electronics", inStock: false },
    { name: "Book", price: 40, category: "Education", inStock: true },
    { name: "Headphones", price: 150, category: "Electronics", inStock: true },
    { name: "Notebook", price: 15, category: "Education", inStock: false }
]
products.forEach(e => {
    console.log(e.name, e.price)
})
let sum = 0
for(let i of products){
    i.inStock?console.log(i.name,true):NaN
    i.price>1000?console.log(i.name,i.price):NaN
    i.category==='Education'?console.log(i.name,i.category):NaN
    sum += i.price
}
console.log(sum)
// 
// 
// 
// 
// 
let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
]
let l1 = []
students.forEach(a=>{
    a.score>80&&a.attendance>90?l1.push(a):null
})
l1.forEach(a=>{
    console.log(a.name,a.age,a.score,a.attendance)
    console.log(`${a.name} - Age:${a.age}, Score: ${a.score}, Attendance: ${a.attendance}`)
})
console.log(l1.length)