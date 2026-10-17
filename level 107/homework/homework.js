const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]
let scores2 = scores.filter(num => num >= 60)
scores2 = scores2.map(score => score += 5)
console.log(scores2.reduce((acc , a) => {
  console.log(acc,a)
  return acc += a
}))
console.log(scores2.findIndex(ind => ind === 100))
console.log(scores.some(ind => ind < 30))
console.log(scores.every(ind => ind > 20))
scores2 = scores2.forEach(score => {
  return console.log(score)
})
// 
// 
// 
// 
let prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60]
prices = prices.filter(p => p > 200)
prices = prices.map(ind => ind - 50)
let prices2 = prices.map(ind => ind *2)
console.log(prices2.reduce((ind, e) => ind+=e))
console.log(prices.findIndex(id => id > 500))
console.log(prices.some(ind => ind > 1000))
console.log(prices.every(ind => ind > 50))
prices.forEach(p => console.log(p))
prices2.forEach(p => console.log(p))
// 
// 
// 
// 
const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11]
let numbers2 = numbers.filter(num => num % 2=== 0)
numbers2 = numbers2.map(n => n*3)
numbers2 = numbers2.filter(num => num > 50)
console.log(numbers2.reduce((a,b)=>a+=b))
console.log(numbers.findIndex(num => num >20))
console.log(numbers.some(num => num >40))
console.log(numbers.every(num => num >0))
numbers.forEach(num => console.log(num))
numbers2.forEach(num => console.log(num))
// 
// 
// 
// 
const words = [
  "javascript",
  "html",
  "programming",
  "css",
  "developer",
  "react",
  "computer",
  "code",
  "algorithm"
]
let words2 = words.filter(w=>w.length>5)
words2 = words2.map(w=>w.toUpperCase())
words2 = words2.filter(w=>w.length>8)
console.log(words2)
console.log(words2.reduce((a,b)=>a+=b.length,0))
console.log(words.findIndex(w=>w.length>8))
console.log(words2.some(w=>w.length>10))
console.log(words2.every(w=>w.length>3))
words2.forEach(e=>console.log(e))
// 
// 
// 
// 
const numbers3 = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32]
let n = numbers3.filter(n=>n>20)
n=n.map((e,i)=>e+=i)
n=n.filter(e=>e%2===0)
n=n.map(e=>e*2)
console.log(n.reduce((a,b)=>a+=b))
console.log(n.reduce((a,b)=>a<b?b:a))
console.log(numbers3.findIndex(s=>s>60))
console.log(n.some(e=>e>200))
console.log(n.every(e=>e%2===0))
n.forEach(e=>console.log(e))
//
//
//
//
const scores3 = [
  45, 88, 72, 96, 54, 100, 63, 81,
  39, 92, 77, 68, 85, 49, 98, 59
]
let s = scores3.filter(a=>a>60)
s=s.map(a=>a+=7)
s=s.filter(a=>a>=80)
s=s.map((a,i)=>a-=i)
s=s.filter(a=>a%2===1)
console.log(s.reduce((a,b)=>a+=b))
console.log(s.reduce((a,b)=>a+=b)/s.length)
console.log(scores3.findIndex(a=>a>90))
console.log(s.some(a=>a<90))
console.log(s.every(a=>a>70))
s.forEach(a=>console.log(a))
// 
// 
// 
// 
let a1 = [
  18, 45, 72, 91, 34, 120, 57, 86,
  103, 64, 39, 150, 77, 98, 25, 132
]
a=a1
a=a.filter(e=>e>30)
a=a.map((a,i)=>a+=i)
a=a.filter(e=>e%2===0)
a=a.map(a=>a%2===0?a+=20:a-=10)
a=a.filter(a=>a>100)
console.log(a.reduce((a,b)=>a+=b))
console.log(s.reduce((a,b)=>a+=b)/s.length)
console.log(a.reduce((a,b)=>a<b?b:a))
console.log(a1.findIndex(a=>a>100))
console.log(a1.some(a=>a>140))
console.log(a.every(a=>a>100&&a%2===0))
let i = 0
a.forEach(element => {
  console.log(element, i, element > 200) 
  i++
})
console.log(a1.length,a.length,a1.length+a.length,a1.length+a.length/2)