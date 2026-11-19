let student = {
    name: "Nika",
    age: 17,
    grade: 11,
    scores: [90, 85, 95]
}
let {name,age,scores} = student
let [s1,s2,s3] = scores
console.log(`${name} is ${age} years old and has scores of ${s1,s2,s3}`)
console.log(s1+s2+s3)
// 
// 
// 
// 
let character = {
    username: "Shadow",
    level: 15,
    stats: [100, 80, 45],
    weapons: ["Sword", "Bow", "Dagger"]
}
let {username , level, stats, weapons} = character
let [hp, enrg, dmg] = stats
let [wpn1, wpn2] = weapons
console.log(character)
if (hp < 50){
    console.log('Low hp')
}
else{
    console.log("Character is Ready!")
}
// 
// 
// 
// 
let product = {
    title: "Gaming Laptop",
    price: 2500,
    specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
    colors: ["Black", "White", "Gray"]
}
let {title, price, specifications, colors} = product
let [spec1,spec2,spec3]=specifications
let [colr1,  , colr2] = colors
console.log(product)
if(price>2000){
    console.log('Expensive Product')
}
else{
    console.log('Affordable Product')
}
// 
// 
// 
// 
let school = {
    schoolName: "Future Academy",
    location: "Tbilisi",
    students: [
        ["Nika", 16, 90],
        ["Ana", 17, 95],
        ["Gio", 15, 75]
    ],
    subjects: ["Math", "English", "Programming"]
}
let {schoolName, location: location1, students, subjects} =school 
let [suj1,suj2,suj3]= subjects
let [st1,st2] = students
console.log(`${schoolName} is in ${location1} and the students are ${st1}, ${st2}`)
console.log(st1[2]>80)
// 
// 
// 
// 
// 
let company = {
    name: "TechVision",
    address: "Tbilisi",
    employees: [
        {
            fullName: "Giorgi",
            position: "Developer",
            details: [25, 3000, "Frontend"]
        },
        {
            fullName: "Nika",
            position: "Designer",
            details: [23, 2500, "UI/UX"]
        },
        {
            fullName: "Ana",
            position: "Manager",
            details: [28, 4000, "Management"]
        }
    ],
    departments: ["Development", "Design", "Management"]
}
let {name: cname, address, employees, departments} = company
let {fullName: fullName1, position: position1, details: details1 } = employees[0]
let [age1, salary1, special1] = details1
let {fullName: fullName2, position: position2, details: details2 } = employees[1]
let [age2, salary2, special2] = details2
console.log(`${fullName1} is ${age1} years old works as a ${special1} ${position1} with a salary of ${salary1}`)
console.log(`${fullName2} is ${age2} years old works as a ${special2} ${position2} with a salary of ${salary2}`)
console.log(salary1>salary2?fullName1+' has more salary':fullName2+' has more salary')
let {fullName: fullName3, position: position3, details: details3 } = employees[2]
let [age3, salary3, special3] = details3
console.log(salary1>3000?fullName1+ ' High salary':salary2>3000?fullName2 + ' High salary':salary3>3000?fullName3 + ' High salary':'Nobody has more than 3000')
