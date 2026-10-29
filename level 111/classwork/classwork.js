let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    city: "Tbilisi",
    departments: 4,
    budget: 120000,
    active: true,
    projects: 8
}
let l1=[1,2,3,4,5]
let l2=[]
l1 = Object.keys(company).map(a=>a)
l2 = Object.values(company).map(a=>a)
console.log(l1.length)
console.log(l2.length)
for(let i of l1){
    console.log(i)
}
for(let i of l2){
    console.log(i)
}
let l3=l2.filter(a=>typeof a === "number"?a:NaN)
console.log(l3)
console.log(l3.reduce((a,b)=>a+=b))
// 
// 
// 
company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    budget: 120000,
    marketing: 15000,
    development: 45000,
    design: 12000,
    support: 8000,
    active: true
}
let total = 0
let moreT6 = 0
for(let i in company){
    console.log(i)
    if(typeof company[i] === "number"){
        total += company[i]
        console.log(total)
    }
    if(i.length>6){
        moreT6++
    }
}
console.log(moreT6)