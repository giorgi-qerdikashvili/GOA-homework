let score = 87
score <= 100 && score >= 90 ? console.log('Excellent') : score < 90 && score >= 75 ? console.log('Very Good') : score < 75 && score >= 60 ? console.log('Good') : score < 60 && score >= 40 ? console.log('Passed') : score < 40 && score >= 0 ? console.log('Failed') : console.log('invalid score')
let age = 20
let isStudent = true
age < 18 ? console.log('Minor') : age > 18 && isStudent ? console.log('Adult Student') : age > 65 ? console.log('Senior') : age > 18 && !isStudent ? console.log('Adult') : console.log('Not a Student')
let num = -14
num > 0 ? num % 2 == 0 ?  console.log('positive Even') : console.log('positve Odd') : num < 0 ? num % 2 == 0 ? console.log('Negative even') : console.log('Negative Odd') : console.log('its 0')
let username = "adminGoga"
!username ? console.log('Username is empty') : username.startsWith('admin') ? console.log('Admin') : username.startsWith('user') ? console.log('User') : console.log('Unknown user')
let temp = 28
temp < 0 ? console.log('Freezing') : temp < 11 ? console.log('Cold') : temp < 21 ? console.log('Cool') : temp < 31 ? console.log('Warm') : console.log('Hot')
let a = 45
let b = 78
let c = 32
a > b ? a > c ? console.log(a) : console.log(c) : b > c ? console.log(b) : console.log(c)
let day = 4
switch (day) {
    case 1 :
        console.log('Monday')
        break
    case 2 :
        console.log("Tuesday")
        break
    case 3 :
        console.log("Wednesday")
        break
    case 4 :
        console.log("Thursday")
        break
    case 5 :
        console.log('Friday')
        break
    case 6 :
        console.log('Saturday')
        break
    case 7 :
        console.log('Sunday')
        break
    default :
        console.log('Invalid day')
}
let grade = "B"
switch (grade){
    case 'A' :
        console.log('Excellent')
        break
    case 'B' :
        console.log('Very Good')
        break
    case 'C' :
        console.log('Good')
        break
    case 'D' :
        console.log('Passed')
        break
    case 'F' :
        console.log('Failed')
        break
    default:
        console.log('Invalid score')
}
let month = 8
switch (month){
    case 12:
    case 1:
    case 2:
        console.log('Winter')
        break
    case 3:
    case 4:
    case 5:
        console.log('Spring')
        break
    case 6:
    case 7:
    case 8:
        console.log('Summer')
        break
    case 9:
    case 10:
    case 11:
        console.log('Autumn')
        break
    default:
        console.log('Invalid month')
        break
}
a = 20
b = 5
let operator = "*"
switch (operator){
    case '+':
        console.log(a + b)
        break
    case '-':
        console.log(a - b)
        break
    case '*':
        console.log(a * b)
        break
    case '/':
        console.log(a / b)
        break
    case '%':
        console.log(a % b)
        break
    default:
        console.log('Invalid operator')
}
let action = "withdraw"
let balance = 500
let amount = 200
switch (action){
    case 'balance':
        console.log(balance)
        break
    case 'depost':
        console.log(balance + amount)
        break
    case 'withdraw':
        balance >= amount ? console.log(balance - amount) : console.log('Insufficent funds')
    case 'exit':
        console.log('Goodbye!')
    default:
        console.log('Invalid action')
}