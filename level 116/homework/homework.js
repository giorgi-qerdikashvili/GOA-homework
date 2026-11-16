let student = ["Goga", "Chalauri", 19, "Tbilisi", 95]
let [name,surname,age,city,score]=student
console.log(name + ' ' + surname)
console.log(score > 90)
console.log(`${name} ${surname} is ${age} years old and has ${score} points`)
// 
// 
// 
// 
let products = ["Laptop", 2500, "Electronics", 15, true];
[name] = products
let [,,categ] = products
let [,,,,stock] = products
console.log(stock)
// 
// 
// 
// 
let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78];
[name ,score ] = exam
// score is definded but subj isnt do we need let here?
let [,,subj,,subj2,score2]=exam
console.log(score + score2)
console.log(score > score2?score:score2)
// 
// 
// 
// 
let students = [
    ["Goga", 19, [90, 85, 95]],
    ["Nika", 20, [75, 88, 80]],
    ["Saba", 18, [100, 95, 90]]
]
let [s1] = students
let [,s2] = students
let [,,s3] = students
let [name1 ,age1] = s1
let [name2 ,age2] = s2
let [name3 ,age3] = s3
let [s11,s12,s13] = s1[2]
let [s21,s22,s23] = s2[2]
let [s31,s32,s33] = s3[2]
console.log(s11+s12+s13)
for (i of [s11,s12,s13,s21,s22,s23,s31,s32,s33]){
    if(i === 100){
        console.log(true)
    }
}
// 
// 
// 
// 
let company = [
    "TechVision",
    [
        "Development",
        ["Giorgi", "Nika", "Saba"],
        35000
    ],
    [
        "Marketing",
        ["Ana", "Mariam"],
        12000
    ]
];
[name] = company
let [depart] = company[1]
let [w1,,w2] = company[1][1]
let [,,devbu] = company[1]
let [depart2]=company[2][0]
let [w3,w4]=company[2][1]
let [,,markbu] = company[2]
console.log(devbu+markbu)
// 
// 
// 
// 
student = {
    name: "Goga",
    surname: "Chalauri",
    age: 19,
    city: "Tbilisi",
    score: 95
};
({surname,age,city} = student)
let {name: studentName,score: studentScore} = student
console.log(studentName +' '+ surname + ' ' + age)
console.log(studentScore > 90)
// 
// 
// 
// 
let product = {
    title: "Gaming Laptop",
    price: 2500,
    category: "Electronics",
    stock: 12,
    available: true
}
let {title: productName,price,category,stock: quantity, available} = product
console.log(productName + ' '+ price)
console.log(available?'"Product is available"':"Out of stock")
// 
// 
// 
// 
let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    position: "Developer",
    salary: 3500,
    experience: 4
};
({firstName: name, lastName: surname} = employee)
let {position: jobTitle, salary, experience} = employee
console.log(`${name} ${surname} ${jobTitle}`)
console.log(experience > 3)
// 
// 
// 
// 
let car = {
    brand: "BMW",
    model: "M5",
    year: 2023,
    color: "Black",
    price: 85000,
    isElectric: false
}
let {brand:carBand,model:carModel,year:producionYear,color,isElectric,price2} = car
console.log(`${carBand} ${carModel}`)
console.log(producionYear > 2020)
console.log(isElectric)
// 
// 
// 
// 
company = {
    name: "TechVision",
    employees: 45,
    income: 120000,
    expenses: 75000,
    founded: 2018,
    country: "Georgia",
    isActive: true
}
let {name: companyName, employee: employeeCount, income: totalIncome, expenses: totalExpenses,founded,country,isActive} = company
console.log(totalIncome - totalExpenses)
console.log(totalIncome - totalExpenses > 50000)
console.log(founded < 2020)
console.log(isActive)
console.log(`${totalIncome} ${totalExpenses}`)