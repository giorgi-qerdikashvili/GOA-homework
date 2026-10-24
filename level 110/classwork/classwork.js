let obj = {
    productName : 'Rugs', 
    price : '500$',
    quantity : 55,
    inStock : true,
    allProdPrice(){
        return obj.price.slice(0,3) * obj.quantity 
    },
    isStock(){
        return obj.inStock ? "yes we have this nproduct" : "no we dont have this product"
    }
}
console.log(obj.allProdPrice())
console.log(obj.isStock())
// 
// 
//
// 
let university = {
    name: "Tbilisi University",
    address: {
        city: "Tbilisi",
        building: {
            number: 10,
            floors: 6
        }
    },
    department: {
        name: "Computer Science",
        students: ["Nika", "Ana", "Gio", "Mariam"],
        teacher: {
            name: "Luka",
            subjects: ["JavaScript", "Python", "React"]
        }
    },
    library: {
        books: {
            programming: ["JavaScript Basics", "Learn Python"],
            databases: ["SQL Guide", "MongoDB Basics"]
        }
    }
}
console.log(university.address.building.number)
university.address.city = 'Qutaisi'
delete university.address.building.floors  
console.log(university.department.teacher.subjects[1])
university.department.teacher.subjects.push('C++')
university.department.teacher.name = 'gio'
delete university.library.books.programming
for (let i of university.library.books.databases){
    if (i.length > 15){
        console.log(i)
    }
}