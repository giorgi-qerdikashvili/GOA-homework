let number = 100
let i = 1
let sum = 0
while (i < number){
    if (i % 3 === 0){
        console.log(i)
        sum++
        i++
    }
    i++
}
console.log(sum)
const numbers = [-5, 10, -2, 8, 0, 15, -7]
let zeros = 0
let pos = 0
let neg = 0
i = 0
for(i; i < number.length; i++){
    if(numbers[i] === 0){
        zeros++
    }
    else if(number[i] > 0){
        pos++
    }
    else{
        neg++
    }
}
console.log(pos,zeros,neg)

const secretNumber = 7;
let guess = 1;
while(guess !== secretNumber){
    guess++
    if (guess === secretNumber){
        console.log('Correct number')
    }
}
i = 0
do{
    i++
    console.log(i)
}
while(i < 10) //10 ჯერ
do{
    i++
    console.log(i)
}
while(i < 10) //1 ხელ

function analyzeNumbers(nums){
    sum = 0
    even = 0
    odd = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        if (nums[i] % 2 === 0){
            even++
        }
        else if (nums[i] % 2 === 1){
            odd++
        }
    }
    console.log(sum, even, odd)
} 
analyzeNumbers([1,55,32,74,993,5143])

const prices = [100, 250, 80, 400, 150]
function calculateDiscount(percent){
    l1 = []
    for (let i = 0; i < prices.length; i++){
        l1.push(prices[i] - (prices[i] * (percent / 100)))
    }
    return l1
}
console.log(calculateDiscount(20))

function findDivisors(num){
    for (let i = 0; i <= num; i++){
        if (num % i === 0){
            console.log(i)
        }
    }
}
findDivisors(50)

function countVouels(str){
    cou = 0
    for (let i = 0; i < str.length; i++){
        if('aeiou'.includes(str[i])){
            cou++
        }
    }
    return cou
}
console.log(countVouels('sssoodeegrbvbrwvfavd'))

const numbers2 = [4, 8, 12, 25, 30, 40, 50]
for (let i = 0; i < numbers2.length; i++){
    if (numbers2[i] > 20){
        console.log(numbers2[i])
        break
    }
}

function calculateSum(n){
    sum = 0
    for (let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}
console.log(calculateSum(333))

const text = "JavaScript is fun and JavaScript is powerful"
function analyzeTexts(str){
    let a_count = 0
    let spaces = 0 
    for (let i = 0; i < str.length; i++){
        if (str[0] === ' '){
            break
        }
        console.log(str[i])
        if(str[i] === 'a'){
            a_count++
        }
        else if(str[i] === ' '){
            spaces++
        }
        if('aeiou'.includes(str[i])){
            console.log('ხმოვანი')
        }
    }
    for (let i = str.length-1; i >=0; i--){
        console.log(str[i])
    }
    console.log(a_count, spaces)
}
analyzeTexts(text)

function numberGame(secretNumber){
    let guess = 0
    while (guess !== secretNumber){
        guess++
        console.log('not', guess)
        
    }
    console.log('You found it, its '+ secretNumber + '. it only took ' +  (secretNumber-1) +' trys')
}
numberGame(3)

let devBy3 = 0
let devBy5 = 0
let devBy3And5 = 0
let devBy7 = 0
let devByNether3Or5 = 0
for(let i = 1; i < 501; i++){
    if (i % 3 === 0){
        devBy3++
        if(i % 5 === 0){
            devBy3And5++
        }
    }
    else if (i % 5 === 0){
        devBy5++
    }
    else {
        devByNether3Or5++
    }
    if (i % 7 === 0){
        devBy7++
    }
}
console.log(devBy3,devBy5,devBy3And5,devBy7,devByNether3Or5)

number = '58374629'
let len = String(number).length
even = 0
odd = 0
sum = 0
max = 0
min = 0
let moreThan5 = 0
for (let i = 0; i < number.length; i++){
    n = Number(number[i])
    sum += n
    if (n % 2 === 0 || n === 0){
        even++
    }
    else{
        odd++
    }
    if (max < n){
        max = n
    }
    if (min > n){
        min = n
    }
    if (n>5){
        moreThan5++
    }
}
console.log(even,odd,sum,max,min,len,moreThan5)

numbers3 = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5]
sum = 0
for(let i=0;i<numbers3.length;i++){
    sum += numbers3[i]
    if (numbers3[i] % 3 === 0){
        continue
    }
    else{
        console.log(numbers3[i])
    }
    if (numbers3[i] > 50){
        break
    }
}
console.log(sum)

let balance = 1200;
let fail = 0
let minus =0
let plus = 0
operations = [200, -150, -500, 300, -200, -1500, 400];
for (let i = 0; i < operations.length; i++){
    let o = operations[i]
    if (String(operations[i])[0] !== '-'){
        plus++
        balance += o
    }
    else{
        minus++
        if ((balance + o) < 0){
            console.log('Not enough money!')
            fail++
            continue
        }
        else{
            balance += o
        }
    }
}
console.log(balance,fail,minus,plus)

numbers4 = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];
sum = 0
even = 0
odd = 0
mor50 = 0
les50 = 0
maxEven = 0
maxOdd = 0
minEven = 0
minOdd = 0
console.log(Math.max(...numbers4))
console.log(Math.min(...numbers4))
console.log(Math.max(...numbers4)/numbers4.length)
for(let i = 0; i<numbers4.length; i++){
    o = numbers4[i]
    sum += o
    if (o % 2 === 0){
        even++
        if (maxEven < o){
            maxEven = o
        }
        if (maxOdd > o){
            maxOdd = o
        }
    }
    else{
        odd++
        if (minEven < o){
            minEven = o
        }
        if (minOdd > o){
            minOdd = o
        }
    }
    if (o > 50){
        mor50++
    }
    else{
        les50++
    }
}
console.log(sum,even,odd,mor50,les50,maxEven,maxOdd,minEven,minOdd)

let correctPin = 4821;
let attempts = [1234, 1111, 4821, 5555]
let trys = 1
for (let i =0; i < attempts.length; i++){
    if(trys >= 3){
        console.log('Card blocked')
        break
    }
    if (correctPin === attempts[i]){
        console.log('Access granted', trys)
        break
    }
    else{
        trys++
        console.log('Access deined')
    }
}