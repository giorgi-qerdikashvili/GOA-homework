let checkNumber = num => num > 0 ? 'Positive' : num === 0 ? 'its Zero' : 'Negative'
console.log(checkNumber(4))
let getGrade = function(score){
    return score < 0 ? 'invalid score' : score < 60 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : score <= 100 ? 'A' : score > 100 ? 'Invalid score' : 'Not a number'
}
console.log(getGrade(90))
let checkWord = word => {
    word = word.toLowerCase()
    return word.startsWith('a') ? 'Starts with a' : 'Does not start with a'
}
console.log(checkWord('Apple'))
let analyzeNumbers = function(num1 , num2 , num3){
    return Math.max(num1 , num2 , num3)
}
console.log(analyzeNumbers(3,6,4))
let analyzeText = text => {
    console.log(text.length , text.toUpperCase() , text.startsWith('Hello') )
}
analyzeText('Hello raah')
let disc = (price , discount) => discount >= 50 ? 'Discount too high' : discount < 0 ? 'Invalid discount' : price - price * discount / 100
console.log(disc(100 , 33))
let validatePassword = pass => {
    if (pass.length > 7 && pass.includes('@') && pass[0] === pass[0].toUpperCase()){
       return 'Strong password'
    }
    else {
        return 'Weak password'
    }
}
console.log(validatePassword('ehegames@dds'))
let validateUser = (user, age, password) =>{
    return user && age > 17 && password.length > 7 ? 'Username is valid' : 'Username is invalid'
}
console.log(validateUser('gio', 18 , 's45f41ssss'))