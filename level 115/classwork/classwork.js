function persons(name,surname,age,adress,hobby){
    return{
        name:name,
        surname:surname,
        age:age,
        adress:adress,
        hobby:hobby,
        displayUserName(){
            return `${name},     ${surname}, ${age}`
        }
    }
}
let l1 = persons('gia','ada','22','zxce2','game')
console.log(l1.displayUserName())
let l2 = persons('luka','subar','55','zxce2','art')
console.log(l2.displayUserName())
let l3 = persons('saba','rama','65','zxce2','design')
console.log(l3.displayUserName())
let l4 = persons('nika','qera','18','zxce2','code')
console.log(l4.displayUserName())
