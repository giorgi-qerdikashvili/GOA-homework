const checkNumber = function(num){
    return num > 0 ? num % 2 === 0 ? console.log("Positive Even") : console.log("Positive Odd") : num < 0 ? num % 2 === 0 ? console.log('Negative Even') : console.log('Negative Odd') : console.log('Zero')
}
checkNumber(21)

let arrow = name =>{
    if (name[0] === 'გ'){
        return 'Good name'
    }
    return 'Still good name'
}
console.log(arrow('s'))

let arrow2 = num => num % 2 === 0 ? 'Even' : 'Odd'
console.log(arrow2(2))