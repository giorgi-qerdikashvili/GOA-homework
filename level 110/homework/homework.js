let user = {
    username: "Shadow",
    age: 19,
    email: "shadow@gmail.com",
    city: "Tbilisi",
    status: "active"
}
console.log(user["username"],user["age"],user["city"])
user["username"] = 'DarkKnight'
user["age"] = 21
user["phone"] = "555123456"
delete user.email
user.isVerified = true
user.status = 'Premium'
console.log(user)
// 
// 
//
//
let player = {
    name: "Dragon",
    health: 100,
    energy: 80,
    level: 5,
    weapon: "Sword",
    armor: "Basic"
}
console.log(player.name,player.health,player.weapon)
player['health'] = 65
player.weapon = 'Bow'
player.damage = 40
player['Magic'] = true
delete player['armor']
player.level = 6
player.rank = 'Gold'
delete player.energy
console.log(player)