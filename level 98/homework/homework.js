function editProducts(products){
    products.unshift('Phone')
    products.push('Headphones')
    products.pop()
    products[2] = 'Webcam'
    return products
}
console.log(editProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]))

function organizeNumbers(numbers){
    let numb1 = numbers.slice(0 , 4)
    let numb2 = numbers.slice(numbers.length - 4 , numbers.length )
    numb2.unshift(100)
    numb1.push(5)
    numb1 = numb1.concat(numb2)
    console.log(numb1)
}
organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80])

function studentManager(students) {
    students.shift()
    students.unshift('Mariam')
    students.push('Dato')
    students.splice(3 , 1 , 'Gabriel')
    let students2 = students.slice(0 , 4) 
    console.log(students2)
    return students
}
console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]))

function shoppingCart(cart){
    cart.unshift('Water')
    cart.push('Chocolate')
    cart.shift()
    cart.splice(cart.indexOf('Cheese'), 1 , 'Yogurt')
    return cart
}
console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]))

function finalList(numbers){
    if (Array.isArray(numbers)){
        numbers.shift()
        numbers.unshift(100)
        numbers.pop()
        numbers.push(200)
        numbers.splice(numbers.length/2 , 0 , 300)
        let numbers2 = numbers.slice(0 , numbers.length)
        return numbers2 
    }
    else{
        return 'Not an array'
    }

}
console.log(finalList([15, 25, 35, 45, 55, 65]))

let students = [
    ["Giorgi", 18],
    ["Nika", 20],
    ["Luka", 17],
    ["Saba", 19]
]
function getStudent(students){
    console.log(students[0][0])
    console.log(students[1][1])
    students[2][1] = 18
    console.log(students)
}
getStudent(students)

let products = [
    ["Laptop", 2500],
    ["Phone", 1500],
    ["Mouse", 80],
    ["Keyboard", 120]
]
function updateProducts(products){
    products[0][1] = 2300
    products[2][1] = 100
    products.splice(1 , 0 , ["Tablet", 900])
    products.pop()
    return products   
}
console.log(updateProducts(products))

let store = [
    [
        "Electronics",
        [
            ["Laptop", 2500, ["Black", "Silver"]],
            ["Phone", 1500, ["Black", "White"]],
            ["Tablet", 900, ["Gray", "Blue"]]
        ]
    ],

    [
        "Clothes",
        [
            ["T-Shirt", 80, ["Red", "Black", "White"]],
            ["Jeans", 150, ["Blue", "Black"]],
            ["Jacket", 300, ["Black", "Brown"]]
        ]
    ],

    [
        "Shoes",
        [
            ["Nike", 400, ["Black", "White"]],
            ["Adidas", 350, ["White", "Blue"]],
            ["Puma", 250, ["Black", "Red"]]
        ]
    ]
]
function manageStore(store) {
    console.log(store[0][1][1][0])
    console.log(store[0][1][1][1])
    console.log(store[0][1][1][2][1])
    store[0][1][0][1] = 1000
    store[0][1][0][2].push('White')
    store[1][1][0][2][2] = 'Green'
    store[1][1][1][2].pop()
    store[2][1][0][2].unshift('Red')
    store[2][1][2][2][1] = 'Green'
    store[2][1].push(["New Balance", 450, ["Gray", "Black"]])
    store[1][1].pop()
    l1 = store[0][1].slice(0 , 2)
    store[2][1] = store[2][1].concat([["Reebok", 280, ["Black", "White"]]])
    return store
}
console.log(manageStore(store))

for (let i = 1; i < 10; i++){
    console.log(i)
}
for (let i = 2; i < 20; i += 2){
    console.log(i)
}
let sum = 0;
for (let i = 1; i < 100; i++){
    sum += i
}
console.log(sum)
for (let i = 0; i < 20; i++){
    console.log('Gio')
}
for (let i = 20; i < 50; i += 5 ){
    console.log(i)
}
for (let i = 0; i < 'giorgi'.length; i++){
    console.log(i , ' Giorgi')
}