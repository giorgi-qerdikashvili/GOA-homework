let numbers = [12, 45, 7, 23, 89, 34, 16, 50]
numbers[0] = 100
numbers[7] = 200
numbers[2] = 17
numbers[4] = 44.5
numbers[3] = 16
numbers[6] = 23
console.log(numbers)
numbers = [15, 8, 42, 8, 31, 42, 19, 8]
numbers[1] = 80 
numbers[2] = 420
numbers[7] = 800
numbers[1] += 5
console.log(numbers)
let fruits = ["apple", "banana", "orange", "kiwi", "mango", "peach"]
let index = 3
console.log(fruits[index])
fruits[index] = 'watermelon'
console.log(fruits[index])
console.log(fruits)
let names = ['david' , 'ia' , 'lizi' ]
user = prompt('Give name') 
names.unshift(user)
console.log(names)
let students = [
    "Giorgi",
    "Nika",
    "Saba",
    "Luka",
    "Dato",
    "Ana"
]
let position = 4;
let newName = "Goga"
if (position < students.length && position >= 0){
    students[position] = newName
    console.log(students)
}
else{
    console.log('invalid position')
}
let colors = ["red", "blue", "green", "yellow", "black", "white"]
colors[2] = 'purple'
colors[4] = 'pink'
colors.shift(0)
colors.push('red')
console.log(colors)
numbers = [5, 10, 15, 20, 25, 30, 35, 40]
numbers[1] *= 10
numbers[2] *= 10
numbers[3] *= 10
numbers[4] *= 10
numbers[5] *= 10
console.log(numbers)
    
numbers = [10, 20, 30, 40, 50, 60, 70, 80]  
numbers[0] *= 2
numbers[2] *= 2
numbers[4] *= 2
numbers[6] *= 2
numbers[1] += 5
numbers[3] += 5
numbers[5] += 5
numbers[7] += 5
console.log(numbers)