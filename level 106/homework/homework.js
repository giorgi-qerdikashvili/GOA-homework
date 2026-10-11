let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.filter(num => num % 2 === 0))
// 
// 
// 
// 
let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]
console.log(fruits.filter(word => word.length > 4))
// 
// 
// 
// 
numbers = [-5, 10, -3, 0, 8, -1, 15]
console.log(numbers.filter(num => num >= 0))
// 
// 
// 
// 
let names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]
console.log(names.filter(name => name.startsWith('ა')))
// 
// 
// 
// 
let list = [0, "გამარჯობა", "", null, undefined, "JS", false]
console.log(list.filter(item =>{
  if(item){
    return item
  }
}))
//
//
//
//
numbers = [5, 12, 45, 8, 20, 100, 33]
console.log(numbers.filter(num => num >= 10 && num <= 50))
// 
// 
// 
// 
let l1 = ["apple", "banana", "cherry", "date", "avocado"]
console.log(l1.filter(a => a.includes('a')))
// 
// 
// 
// 
list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]
let stringL = list.filter(st => typeof st === 'string')
let numL =  list.filter(nu => nu === Number(nu))
let boolL = list.filter(bu => typeof bu === 'boolean')
console.log(stringL,numL,boolL)