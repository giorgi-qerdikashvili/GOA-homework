function calculatePrice(price , quantity = 1){
    return price * quantity
}
console.log(calculatePrice(23, 4))
console.log(calculatePrice(33, 2))
console.log(calculatePrice(2))

let score = 83
let name = 'Gio'
function getResult(name, score = 0){
    score < 50 ? console.log(`${name} Failed`) : score < 70 ? console.log(`${name} Passed`) : score < 90 ? console.log(`${name} Good`) : score >= 90 ?  console.log(`${name} Excellent`) : console.log('Wrong score')
}
getResult(name ,score)
let price = 222
function calculateShipping(price, shipping = 10){
    return price > 100 ? price : shipping + price     
}
console.log(calculateShipping(price))
name = 'gio'
function checkAge(name, age = 18){
    return age >= 18 ? `${name} is Aduit` : `${name} is Minor`
}
console.log(checkAge(name))
console.log(checkAge(name))
console.log(checkAge(name))
console.log(checkAge(name))
score = 44
function addPoints(score, points = 10){
    return score + points
}
console.log(addPoints(score))
function createMessage(name, message = "Hello, "){
    return message + name + '!'
}
console.log(createMessage(name))
price = 22
function calculateDiscount(price, discount = 10){
    return (discount / 100) * price
}
console.log(calculateDiscount(price))
let value = 444
function convertTemperature(value, type = "C"){
    type === 'C' ? value * 9 / 5 + 32 : type === 'F' ? (value - 32) * 5 / 9 : console.log('Wrong type')
}
let salary = 34
function calculateSalary(salary, bonus = 330){
    return salary > 1000 ? salary + bonus : salary + bonus * 2
}
console.log(calculateSalary(salary))
function checkExam(name, score){
    switch (score){
        case undefined:
            score = 0
    }
    score < 50 ? console.log(`${name} Failed`) : score < 70 ? console.log(`${name} Passed`) : score < 90 ? console.log(`${name} Good`) : score >= 90 ?  console.log(`${name} Excellent`) : null
}
checkExam(name)
function ticketPrice(age, price = 50){
    return price = age < 5 ? 'Free' : age < 13 ? price * 0.5 : age < 60 ? price : (100 / 30) * price 
}
age = 23
console.log(ticketPrice(age))
number = 33
function analyzeNumber(number, limit = 100){
    return number < 0 ? 'Negative' : number === 0 ? 'Zero' : number <= limit ? 'Small positive' : 'Large positive'
}
console.log(analyzeNumber(number))