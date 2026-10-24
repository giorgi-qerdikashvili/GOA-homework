let person = {
    name : 'zaza',
    surname : 'bazridze',
    age : 44,
    hobby : 'problem solving',
    'favorite food' : 'borshi',
    'favorite car' : 'BMW',
    'studing subject' : 'Politics'
}
console.log(person.name)
console.log(person.surname)
console.log(person.age)
console.log(person.hobby)

for (i in person){
    console.log(person[i])
}