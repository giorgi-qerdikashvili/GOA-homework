let dice1 = Math.ceil(Math.random() * 6)
let dice2 = Math.ceil(Math.random() * 6)
console.log(dice1, dice2)
if (dice1 === dice2){
    console.log("დუბლი!")
}
let sum = dice1 + dice2
if (sum >= 10){
    console.log("ძალიან კარგი შედეგია!")
}
else if (sum >= 7 ){
    console.log("კარგი შედეგია!")
}
else{
    console.log("ცუდი შედეგია!")
}
// 
// 2
// 
let hero = (20 + (Math.floor(Math.random() * 21)))
let monster = (15 + (Math.floor(Math.random() * 21)))
console.log(hero, monster)
if (hero === 30){
    hero += 10
}
if(hero === monster){
    console.log("ბრძოლა ფრედ დასრულდა!")
}
if(hero > monster){
    console.log("გმირმა მოიგო!")
}
if(hero < monster){
    console.log("მონსტრმა მოიგო!")
}
// 
// 3
// 
let speed = (40 + (Math.floor(Math.random() * 81)))
console.log(speed)
if(speed === 100){
    console.log("ზუსტად 100 კმ/სთ!")
}
if(speed <= 60){
    console.log("ნელა მიდის")
}
else if(speed <= 90){
    console.log("ნორმალური სიჩქარე")
}
else if(speed <= 110){
    console.log("ნორმალური სიჩქარე")
}
else{
    console.log("ძალიან სწრაფად მიდის")
}
// 
// 4
// 
let box = Math.ceil(Math.random() * 10)
console.log(box)
if (box < 4){
    console.log("ცარიელი ყუთი")
}
else if (box < 7){
    console.log("10 მონეტა")
}
else if (box < 9){
    console.log("30 მონეტა")
}
else if (box === 9){
    console.log("50 მონეტა")
}
else{
    console.log("100 მონეტა და ბონუსი!")
    let box2 = Math.ceil(Math.random() * 5)
    console.log(box2)
    if (box2 === 5){
        console.log("სუპერ ბონუსი!")
    }
    else{
        console.log("ჩვეულებრივი ბონუსი!")
    }
}
// 
// 5
// 
let player1 = (10 + (Math.floor(Math.random() * 21))) 
let player2 = (10 + (Math.floor(Math.random() * 21))) 
let p1q =Math.ceil(Math.random() * 10)
let p2q =Math.ceil(Math.random() * 10)
if (p1q === 20){
    p1q += 5
}
else if (p1q === 10){
    p1q += 3
}
if (p2q === 20){
    p2q += 5
}
else if (p2q === 10){
    p2q += 3
}
player1 += p1q
player2 += p2q
if (player1 > player2){
    console.log('p1 wins')
}
else if (player1 < player2){
    console.log('p2 wins')
}
else{
    console.log('its a tie')
}
// 
// 6
// 
let n1 = Math.ceil(Math.random() * 20)
let n2 = Math.ceil(Math.random() * 20)
let n3 = Math.ceil(Math.random() * 20)
console.log(n1,n2,n3)
if (n1 === n2 === n3){
    console.log("ჯეკპოტი!")
}
else if (n1 === n2 || n2 === n3 || n1 === n3){
    console.log("ორი ერთნაირი რიცხვი!")
}
else{
    console.log("სამივე განსხვავებულია")
}
if((n1 + n2 + n3) > 40){
    console.log("დიდი ჯამი")
}
else{
    console.log("პატარა ჯამი")
}
// 
// 7
// 
let r11 = Math.ceil(Math.random() * 10)
let r21 = Math.ceil(Math.random() * 10)
let r31 = Math.ceil(Math.random() * 10)
let r12 = Math.ceil(Math.random() * 10)
let r22 = Math.ceil(Math.random() * 10)
let r32 = Math.ceil(Math.random() * 10)
let pr1 = r11 + r21 + r31
let pr2 = r12 + r22 + r32
l1 = [r11, r21, r31, r12, r22, r32]
for (i of l1){
    if (i > 5){
        i += 3
    }
    if (i === 10){
        i += 10
    }
}
console.log(pr1, pr2)
if (pr1 > pr2){
    console.log('player1 wins')
}
else if (pr1 < pr2){
    console.log('player2 wins')
}
else{
    console.log('its a tie')
}