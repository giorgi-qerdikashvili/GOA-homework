let name = 'soso'
let surname = 'balava'
let age = '44'
let adress = 'garbanovis st 43'
console.log(`hello, my name is ${name} , my surname is ${surname} and my age is ${age} , i live in ${adress}`)

let st = '33'
let num = 33
let boo = true
let und 
let obj = null
console.log(typeof st)
console.log(typeof num)
console.log(typeof boo)
console.log(typeof und)
console.log(typeof obj)

if (name.startsWith('G')){
    console.log('the name starts with G')
}
else{
    console.log('the name does NOT starts with G')
}

let word = 'Javascript'
if (word.startsWith('Java')){
    console.log("This word starts with Java")
}
else{
    console.log("This word does not starts with Java")
}

let username = 'armada'
if (username.startsWith('admin')){
    console.log('Welcome, admin!')
}
else{
    console.log('Welcome, user!')
}

name = 'Mark'
let city = 'tbilisi'
console.log(`My name is ${name} and I live in ${city}.`)

username = 'Admin'
if (username.startsWith('Admin')){
    console.log(`Welcome, ${name}! You are an admin.`)
}
else{
    console.log(`Welcome, ${name}! You are a regular user.`)
}

if (username.startsWith('teacher')){
    console.log(`Hello ${name}, you are a teacher.`)
}
else{
    console.log(`Hello ${name}, you are a student.`)
}