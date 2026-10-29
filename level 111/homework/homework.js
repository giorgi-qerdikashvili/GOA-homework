let student = {
    name: "Giorgi",
    math: 85,
    english: 92,
    physics: 74,
    chemistry: 88,
    history: 60
}
let l1=Object.values(student).filter(a=>typeof a === "number")
let l2=Object.keys(student)
let s80plus = 0
let s70less=0
for(let i in student){
    console.log(i)
    if (student[i] > 80){
        s80plus++
        console.log(s80plus)
    }
    if(student[i]<70){
        s70less++
    }
}
console.log(l1.reduce((a,b)=>a+=b))
let smol = l1.indexOf(Math.min(...l1))
console.log(l2[smol+1])
// 
// 
// 
// 
let products = {
    laptop: 2500,
    phone: 1800,
    headphones: 250,
    keyboard: 150,
    monitor: 900,
    mouse: 80
}
let morethan500=0
l1 = Object.values(products)
l2 = Object.keys(products)
for(let i in products){
    console.log(i, products[i])
    if(products[i]>500){
        morethan500++
    }
}
console.log(l1.reduce((a,b)=>a+=b))
console.log(l2[l1.indexOf(Math.max(...l1))],Math.max(...l1))
let expensiveProducts = []
for(let i in products){
    if(products[i]>500){
        expensiveProducts.push(i)
    }
}
// 
// 
// 
// 
let user = {
    username: "Goga123",
    age: 19,
    city: "Tbilisi",
    score: 450,
    active: true,
    gamesPlayed: 35
}
let numtype= 0
let morethan5=0
let numericInfo={}
for(let i in user){
    console.log(i,user[i])
    if(typeof user[i] === 'number'){
        numtype++
        numericInfo[i]=user[i]
    }
    if(i.length >5){
        morethan5++
    }
}
console.log(Object.values(numericInfo).reduce((a,b)=>a+b))
// 
// 
// 
// 
let exam = {
    Nika: 95,
    Ana: 68,
    Giorgi: 82,
    Mariam: 45,
    Luka: 73,
    Saba: 30,
    Elene: 88
}
let pass=0
let fail=0
let highest = 0
let bstudent = ''
for(let i in exam){
    console.log(i,exam[i])
    if(exam[i]>70){
        console.log('ჩააბარა')
        pass++
        if(highest<exam[i]){
            highest = exam[i]
            bstudent = i
        }
    }
    else {
        console.log('ვერ ჩააბარა')
        fail++
    }
}
console.log(bstudent,highest)
console.log((Object.values(exam).reduce((a,b)=>a+=b))/Object.values(exam).length)
// 
// 
// 
// 
student = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
}
let plu80 =0
l1 = Object.keys(student)
l2 = Object.values(student)
console.log(l1.length)
for(let i of Object.values(student)){
    i>80?plu80++:NaN
}
console.log(plu80)
console.log(Object.values(student).reduce((a,b)=>a+=b))
console.log(l1[l2.indexOf(Math.max(...l2))],Math.max(...l2))
// 
// 
// 
// 
let employees = {
    Nika: 2500,
    Ana: 3200,
    Luka: 1800,
    Mariam: 4000,
    Saba: 2200,
    Elene: 3500
}
l1 = Object.keys(employees)
l2 = Object.values(employees)
console.log(l1.length)
let morethan3000=0
for(let i of l2){
    i>3000?morethan3000++:NaN
}
console.log(morethan3000)
console.log(l2.reduce((a,b)=>a+b)/l2.length)
console.log(Math.min(...l2))
console.log(l1[l2.indexOf(Math.max(...l2))])
// 
// 
// 
// 
user = {
    username: "Shadow123",
    age: 21,
    city: "Tbilisi",
    score: 750,
    active: true,
    gamesPlayed: 45,
    premium: false
}
l1 = Object.keys(user)
l2 = Object.values(user)
console.log(l1.filter(a=>a.length>5).length)
console.log(l2.filter(a=>typeof a === 'number').length)
console.log(l2.filter(a=>typeof a === 'boolean').length)
