let name
let nameForGreeting = name || 'Guest'
console.log(`hello ${nameForGreeting} , how you doing?`)
// default value became guest becouse name is falsly
let name2 = 'safgfsvsvsd'
name2.length === 6? console.log('Medium length'): name2.length > 6 ? console.log('long length') : console.log('short name')

let city = 'New York'
switch(city){
    case 'Tbilisi':
        console.log('Tbilisi')
        break
    case 'qutaisi':
        console.log('qutaisi')
        break
    case "batumi":
        console.log("batumi")
        break
    default:
        console.log('Other city')
}