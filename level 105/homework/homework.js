let prices = [25, 40, 15, 80, 100, 35]
let l1 = prices.map(price => {
  return price += 20
})
console.log(l1)

let scores = [45, 72, 91, 38, 64, 87]
let l2 = scores.map(score => {
  if (score<50){
    return score+=10
  }
  else{
    return score
  }
})
console.log(l2)
let names = ["nika", "ana", "gio", "mariam", "luka"]
let caps = names.map(n =>{
  return n.toUpperCase()
})
console.log(caps)
let numbers = [2, 5, 7, 10, 12]
let square =  numbers.map(n =>{
  return n*n
})
console.log(square)
numbers = [12, 7, 20, 15, 8, 31, 44]
numbers.forEach(num => {
  if (num % 2 === 0){
    console.log(num)
  }
})
prices = [100, 250, 80, 450, 120]
let output = prices.forEach(price => {
  console.log(`Product price: ${price}`)
})
scores = [95, 67, 42, 81, 55, 30]
scores.forEach(e => {
  if (e >= 80){
    console.log('Exellent')
  }
  else if(e >= 60){
    console.log('Good')
  }
  else if(e >=50){
    console.log('Average')
  }
  else{
    console.log('Failed')
  }
});
prices = [100, 200, 350, 80, 500]
let prices2 = prices.map(price => {
  return price += 50
})
console.log(prices2)  
prices2.forEach(price =>{
  console.log('New price: ' + price)
})
scores = [45, 60, 72, 38, 90]
let scores2 = scores.map(score => {
  if (score < 50){
    return score += 15
  }
  else{
    return score
  }
})
scores2.forEach(score =>{
  console.log('Score: '+score)
})
names = ["nika", "ana", "gio", "mariam", "luka"]
let names2 = names.map(name =>{
  return name.toUpperCase
})
names2.forEach(name => {
  console.log('Student: '+name)
})
numbers = [12, 5, 20, 7, 30, 11, 8]
numbers = numbers.map(num =>{
  if(num % 2 === 0){
    return num * 2
  }
  else{
    return num * 3
  }
})
numbers.forEach(num =>{
  console.log('Result: '+ num)
})
prices = [120, 450, 80, 300, 50, 700]
prices2 = prices.map(price =>{
  if(price < 100){
    return price += 20
  }
  else if(price < 500){
    return price += 50
  }
  else{
    return price += 100
  }
})
prices2.forEach((price, index) =>{
  console.log(`Old price: ${prices[index]}, New price ${price}`)
})
numbers = [5, 12, 25, 8, 40, 17]
let which = numbers.map(num =>{
  if(num < 10){
    return 'Small'
  }
  else if(num < 20){
    return 'Medium'
  }
  else if(num >= 20){
    return 'Large'
  }
})
which.forEach(n => {
  console.log(n)
})
numbers = [10, 25, 4, 18, 33, 7, 40]
numbers = numbers.map(num => {
  if (num > 20){
    return num -= 5
  }
  else if(num < 20){
    return num+=5
  }
  else{
    return num*2
  }
})
numbers.forEach(num =>{
  console.log('Number: '+num)
})
let number = [5, 12, 30, 7, 21, 40, 9, 18]
numbers = number.map(num=>{
  if(num<10){
    num+=10
  }
  else if(num<=20){
    num*2
  }
  else if(num > 20){
    num -= 5
  }
  if(num % 2 ===0){
    return num+=2
  }
  else{
    return num+=1
  }
})
numbers.forEach((num, ind) =>{
  console.log(`Original number: ${number[ind]}    Final result: ${num}`)
})