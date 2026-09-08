let songs = ["Song A", "Song B", "Song C"]
songs.push('Song D' , 'Song E')
songs.pop()
songs.push('Song F')
console.log(songs , 'Song E')

let scores = [45, 67, 89, 34, 72]
scores.push(91, 56)
scores.pop()
console.log(scores, scores.length)

let students = ["Nika", "Gio", "Luka", "Ana"]
students.shift()
students.unshift('Dato', 'Saba')

let messages = ["Hello", "How are you?", "Goodbye"]
messages.splice(0, 1, 'Important!', 'Warning!')
messages.push('See you!')
console.log(messages)

let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"]
let first3 = products.slice(0 , 3)
let last3 = products.slice(3)
let mid2 = products.slice(1 , 3)
console.log(products)
console.log(first3 , mid2 , last3)

let numbers = [10, 20, 30, 40, 50, 60, 70, 80]
let n1 = numbers.slice(2 , 6)
let n2 = numbers.slice(5)
console.log(numbers)
console.log(n1 , n2)

let colors = ["red", "blue", "green", "yellow", "black"]
colors.splice(2 , 2 , 'Purple' , 'Orange')
console.log(colors)

numbers = [5, 10, 15, 20, 25, 30]
numbers.splice(2 , 2 , 100 , 200)
numbers.pop()
console.log(numbers)

let fruits = ["apple", "banana", "orange", "kiwi", "mango"]
let fruits2 = fruits.toSpliced(2 , 1 , 'watermelon')
console.log(fruits)
console.log(fruits2)

numbers = [10, 20, 30, 40, 50]
console.log(numbers.toSpliced(2 , 1 , 100))
numbers = numbers.splice(2 , 1 , 100)
console.log(numbers)

let data1 = [10, 20, 30];
let data2 = "Hello";
let data3 = 100;
let data4 = ["A", "B"];
console.log(Array.isArray(data1), Array.isArray(data2) ,Array.isArray(data3) ,Array.isArray(data4))
console.log('data1 and data4 is array rest is not array')

let sentence = "JavaScript is very interesting"
console.log(sentence.split(' '), sentence.split(' ').length, sentence.split(' ')[0], sentence.split(' ')[3] )

students = "Nika,Gio,Luka,Ana,Saba"
l1 = students.split(',')
console.log(l1[0],l1[1],l1[2],l1[3],l1[4])

let words = ["HTML", "CSS", "JavaScript", "React"]
l1 = words.join(' - ')
l2 = words.join(' | ')
console.log(l1, l2)

numbers = ["555", "12", "34", "56"]
console.log(numbers.join('-'))

let boys = ["Nika", "Gio", "Luka"]
let girls = ["Ana", "Mariam", "Sali"]
console.log(boys.concat(girls))

let cart = ["Phone", "Laptop", "Mouse"]
cart.push('Keyboard')
cart.unshift('USB Cabel')
cart.pop()
cart.shift()
cart.splice(2 , 1 , 'Headphones')
let cart2 = cart.slice(0 , 2)
extraP = ["Webcam", "Microphone"]
cart = cart.concat(extraP)
console.log(Array.isArray(cart))
console.log(cart.join(" | "))

let data = "apple,banana,orange,kiwi,mango"
data = data.split(',')
console.log(Array.isArray(data))
data.push('watermelon')
data.unshift('strawberry')
data.pop()
data.shift()
data.splice(2 , 1 , 'peach')
data2 = data.slice(1 , 4)
data3 = data.toSpliced(3, 1)
let extraFruits = ["grape", "melon"]
data = data.concat(extraFruits)
console.log(data.join(' | '))