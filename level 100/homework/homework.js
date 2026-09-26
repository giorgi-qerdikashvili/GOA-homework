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