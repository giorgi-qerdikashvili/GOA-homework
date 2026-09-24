let prices = [120, 45, 300, 80, 150, 25, 400]
for (let i = 0; i < prices.length; i++){
    if (prices[i] > 100){
        prices[i] = prices[i] - prices[i] / 5
    }
    else if (prices[i] >50 && prices[i] <= 100){
        prices[i] = prices[i] - prices[i] / 10
    }
}
for (let i = prices.length - 1; i > -1 ; i--){
    console.log(prices[i])
}

let messages = [
  "  Hello Goga  ",
  "JAVASCRIPT is fun",
  "  I LOVE CODING ",
  "React is awesome",
  "  Learn JavaScript  "
];
let count = 0
let longs = []
for (let i = 0; i < messages.length; i++){
    messages[i] = messages[i].trim()
    messages[i] = messages[i].toLowerCase()
    if (messages[i].includes('javascript')){
        console.log("JavaScript message found")
        count++
    }
    else if (messages[i].length > 15){
        longs.push(messages[i])
    }
    console.log(longs)
}
for (let i = longs.length; i > 0; i--){
    console.log(longs[i-1])
}
let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21]
count2 = 0
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i])
    } 
    else{
        count2 += numbers[i]
    }
    if (numbers[i] > 10 && numbers[i] < 25){
        console.log('Special number')
    }
    
}
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 3 === 0){
        console.log(numbers[i])
    }
}

let names = [
  "  goga ",
  "NIKA",
  "  ana  ",
  "Giorgi",
  "  mariam"
];
count3 = 0
for (let i = 0; i < names.length; i++){
    names[i] = names[i].trim()
    names[i] = names[i].toLowerCase()
    capital = names[i][0].toUpperCase() + names[i].slice(1)
    names[i] = capital
    if (names[i].includes('a')){
        count3++
    }  
    if (names[i] === 'Goga'){
        console.log('Hello Goga!')
    }
}
console.log(names)
let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95]
let goods = []
let sum = 0
for (i = 0; i < scores.length; i++){
    sum += scores[i]
}
let avarage = sum / scores.length
let failedStudents = 0
let moreThanAvarageScoreCount = 0
let best = Math.max(...scores)
let worst = Math.min(...scores)
for (i = 0; i < scores.length; i++){
    console.log(scores[i])
    if (scores[i] < 50){
        failedStudents++
        console.log('Failed')    
    }
    else if (scores[i] < 70){
        console.log('passed')
    }
    else if (scores[i] < 90 && scores[i] > 80){
        console.log('Good')
        goods.push(scores[i])
    }
    else if(scores[i] >= 90){
        console.log('Excellent')
        goods.push(scores[i])
    }
}
for (i = 0; i < scores.length; i++){
    if (scores[i] > avarage){
            moreThanAvarageScoreCount++
        }
}
console.log(sum, avarage, moreThanAvarageScoreCount, failedStudents, best ,worst, goods)
for (i = goods.length -1; i > -1 ; i--){
    console.log(goods[i], i)
}
names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"]
scores = [85, 42, 96, 67, 51, 73]
let failed = 0
sum = 0
for (let i = 0; i < names.length; i++){
    names[i] = names[i].trim()
    console.log(names[i][0].toUpperCase())
    if (scores[i] >= 90){
        console.log('Excellent')
    }
    else if(scores[i] > 80){
        console.log('Very Good')
        sum += scores[i]
    }
    else if(scores[i] >= 75){
        console.log('Very Good')
    }
    else if(scores[i] >= 60){
        console.log('Good')
    }
    else if(scores[i] >= 50){
        console.log('passed')
    }
    else{
        console.log('Failed')
        failed++
    }
}
max = 0
for (let i = 0; i < scores.length; i++){
    if (scores[i] > max){
        max = scores[i]
    }
}
console.log(names[scores.indexOf(max)], max)
for (let i = scores.length-1; i > -1; i--){
    console.log(names[i] , scores[i])
}

let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"]
prices = [2500, 1800, 80, 150, 900, 300]
let quantities = [3, 5, 20, 12, 4, 8]
l1 = []
let plus10 = 0
for (let i = 0; i < products.length; i++){
    fp = products[i] * prices[i]
    l1.push(fp)
    if (fp > 5000){
        console.log('High sales')
        if (quantities > 10){
            plus10++
        }
    }
    else if(fp < 5000 && fp > 1000){
        console.log("Medium sales")
        if (quantities > 10){
            plus10++
        }
    }
    else{
        console.log('Low sales')
        if (quantities > 10){
            plus10++
        }
    }
}
for (let i = products.length-1; i > -1; i--){
    console.log(products[i], prices[i])
}
