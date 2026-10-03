let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10
console.log(`Player 1-ის ძალა: ${player1}`)
console.log(`Player 2-ის ძალა: ${player2}`)
if (player1 === 20){
    player1 +=5
}
if (player2 === 20){
    player2 +=5
}
console.log(`Player 1-ის ძალა: ${player1}`)
console.log(`Player 2-ის ძალა: ${player2}`)
if (player1 > player2){
    console.log("Player 1 გაიმარჯვა!")
}
else if (player1 < player2){
    console.log("Player 2 გაიმარჯვა!")
}
else{
    console.log("ფრეა!")
}