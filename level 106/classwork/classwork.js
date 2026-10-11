//ფილტრი აბრუნებს მხოლოდ ისეთ პარამეტრს რომელიც აკმაყოფილებს ჩვენს მიერ დენიშნულ მოთხოვნას
let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]
let srulw = ages.filter(age => age >= 18) 
let arasrulw = ages.filter(age => age < 18)
console.log(srulw,arasrulw)

let numbers = [25,111,921,321,432,545,133,987,436]
let newNumber = numbers.map(n => {
    if (n % 2 === 0){
        return n * 13
    }
    else{
        return n * 16
    }
})
let onlyEven = newNumber.filter(n => n % 2 === 0)
console.log(onlyEven)