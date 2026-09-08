/*
function makeNegative(num) {
  return num < 0 ? num : num > 0 ? -num : 0
}

const stringToNumber = function(str){
  return Number(str)
}

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

function makeUpperCase(str) {
  return str.toUpperCase()
}

const rps = (p1, p2) => {
  return p1 === p2 ? "Draw!" : p1 === "scissors" ? p2 === "paper" ? "Player 1 won!" : "Player 2 won!" : p1 === 'rock' ? p2 === 'paper' ? "Player 2 won!" : "Player 1 won!" : p1 === 'paper' ? p2 === 'rock' ? "Player 1 won!" : "Player 2 won!" : "Player 1 won!"
};

function testEven(n) {
    return n % 2 === 0
}
*/
let name = "Goga"; // global

function first() {
    let age = 20; // local to the first(){} code block
    let city = "Tbilisi"; // local to the second(){} code block
    console.log(city)
    function second() {
        console.log(name);
        console.log(age);
    }

    second(); // ყველას იყენებს
}

first(); // ვერ იყენებს city-ს

let score = 100;
if (score > 50) {
    let message = "Passed";
    console.log(message);
}
//console.log(message); ერორს აგდებდა რადგან message არ არსებობს გლობალურად

let x = 10;
function outer() {
    let x = 20;
    function middle() {
        let y = 30; //ამოაგდებს reference error undefined
        function inner() {
            //let x = 40; გამოიყენება outer ის x
            console.log(x); // 40
            console.log(y); // 30
        }
        inner();
    }
    middle();
}
outer();

let country = "Georgia";
function school() {
    let students = 20;
    if (students > 10) {
        let teacher = "Goga";
        console.log(country + ' global scope');
        console.log(students + ' scope is local to school() function');
        console.log(teacher + ' scope is local to this if statement');
    }
}
school()