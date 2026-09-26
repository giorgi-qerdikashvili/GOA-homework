function processNumber(number, operation){
    return operation(number)
}
function double(number){
    return number * 2
}
function triple(number){
    return number * 3
}
function square(number){
    return number * number
}

console.log(processNumber(5, double)
,processNumber(5, triple)
,processNumber(5, square))

function processText(text, action){
    return action(text)
}
function makeUpperCase(text){
    return text.toUpperCase()
}
function makeLowerCase(text){
    return text.toLowerCase()
}
function getLength(text) {
    return text.length
} 

console.log(processText("JavaScript", makeUpperCase)
,processText("JavaScript", makeLowerCase)
,processText("JavaScript", getLength))

function calculate(a, b, operation){
    return operation(a , b)
}
function add(a, b){
    return a+b
}
function subtract(a, b){
    return a-b
}
function multiply(a, b){
    return a*b
}
function divide(a, b){
    return a/b
}
console.log(calculate(10, 5, add),calculate(10, 5, subtract),calculate(10, 5, multiply),calculate(10, 5, divide))