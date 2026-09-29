function sayHello(){
    return 'Hello student!'
}
let greeting = sayHello
console.log(greeting())

function add(a, b) {
    return a + b;
}
let calculate2 = add
console.log(calculate2())

function multiply(a, b){
    return a*b   
}
function subtract(a, b){
    return a-b
}
let operation = multiply
console.log(operation(5,4))
operation = subtract
console.log(operation(5,4))

function add(a, b){
    return a+b
}
function subtract(a, b){
    return a-b
}
function multiply(a, b){
    return a*b
}
operation = add
console.log(operation(20, 5))
operation = multiply
console.log(operation(20, 5))
operation = subtract
console.log(operation(20, 5))

function calculate(a, b, operation) {
    return operation(a, b)
}
function add(a, b){
    return a+b
}
function multiply(a, b){
    return a*b
}
console.log(calculate(5, 3, add))
console.log(calculate(5, 3, multiply))

function double(number){
    return number*2
}
function square(number){
    return number**2
}
function negative(number){
    return -number
}
function processNumber(number, operation) {
    return operation(number)
}
console.log(processNumber(5, double))
console.log(processNumber(5, square))
console.log(processNumber(5, negative))

function passed(score){
    return "Student passed!"
}
function failed(score){
    return "Student failed!"
}
function showResult(score, resultFunction) {
    return resultFunction(score)
}
console.log(showResult(90, passed))
console.log(showResult(40, failed))

let price = 200
function discount(price){
    return price - 20
}
function tax(price){
    return price + 18
}
function shipping(price){
    return price + 30
}
function processPrice(price, operation) {
    return operation(price)
}
console.log(processPrice(price, discount))
console.log(processPrice(price, tax))
console.log(processPrice(price, shipping))

function transform(number, operation) {
    return operation(number)
}
function double(number){
    return number *2
}
function square(number){
    return number **2
}
function addTen(number){
    return number +10
}
function half(number){
    return number /2
}
console.log(transform(20, double))
console.log(transform(20, square))
console.log(transform(20, addTen))
console.log(transform(20, half))