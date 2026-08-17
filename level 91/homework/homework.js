let age = 16
if (age >= 0){
    if (age <= 12){
        console.log('ბავშვი')
    }
    else if (age <= 17){
        console.log('მოზარდი')
    }
    else if (age <= 59){
        console.log('ზდასრული')
    }
    else{
        console.log('პენსიონერი')
    }
}   
else{
    console.log('არასწორი ასაკი')
}
let num = -7
if (num > 0){
    console.log('დადებითი')
}
else if (num < 0){
    console.log('უარყოფითი')
}
else{
    console.log('ნულია')
}
age = 20
let price = 150
let isStudent = true
if (price > 100 && isStudent === true){
    console.log('30% discount')
}
else if (price > 100 || age < 18){
    console.log('20% discout')
}
else if (age >= 60){
    console.log('15% discount')
}
else {
    console.log('No discount')
}

let username = "adminGoga"
if (username){
    if (username.startsWith('admin')){
        console.log('Admin')
    }
    else if(username.startsWith('user')){
        console.log('User')
    }
    else{
        console.log('Unknown user')
    }
}
else{
    console.log('Username is empty')
}
let password = "JavaScript"
if(password){
    if(password.length < 6){
        console.log('Too short')
    }
    else if(password.length < 10){
        console.log('Medium password')
    }
    else{
        console.log('Strong password')
    }
}
else{
    console.log('Password is empty')
}
let city = "TBILISI"
city = city.toLowerCase()
if (city == 'tbilisi'){
    console.log('tbilisi')
}
else if (city == 'batumi'){
    console.log('batumi')
}
else if (city == 'kutaisi')[
    console.log('kutaisi')
]
else{
    console.log('unknown city')
}
age = 19
isStudent = true
if (age < 18){
    console.log('Minor')
}
else if (age >= 18 && isStudent){
    console.log('Adult student')
}
else if (age >= 18 && isStudent == false){
    console.log('Adult')
}
else{
    console.log('invalid age')
}
username = 'User123'
if(username){
    if (username.startsWith('admin') && username.length > 10){
        console.log('Strong admin username')
    }
    else if (username.startsWith('User')){
        console.log('Regular user')
    }
    else if (username.length < 5){
        console.log('Too short')
    }
    else{
        console.log('Valid username')
    }
}
else{
    console.log('Empty')
}
username = 'ADMIN_GOGA'
age = 25
let isActive = true
if(username){
    username = username.toLowerCase()
    if (username.startsWith('admin') && age > 18 && isActive){
        console.log('Admin access')
    }
    else if (username.startsWith('admin') && age > 18){
        console.log('User access')
    }
    else if (age < 18){
        console.log('Access denied')
    }
    else{
        console.log('Unknown account')
    }
}
else{
    console.log('No username')
}