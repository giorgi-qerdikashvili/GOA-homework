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
// 
// 
// 
// 
let product = {
    title: "Gaming Laptop",
    price: 2500,
    brand: "ASUS",
    stock: 12,
    color: "Black",
    category: "Electronics",
    discount: false
}
console.log(product.title, product.price, product.stock)
product.price = 2800
product.stock = 8
product.rating = 4.8
product.warranty = '2 Years'
delete product.color
product.discount = true
delete product.category
product.isAvalible = true
console.log(product.price,product.brand,product.rating,product)
// 
// 
// 
// 
let movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    duration: 169,
    language: "English"
}
console.log(movie.title,movie.director,movie.year)
movie.rating=0.9
movie.duration=170
movie.genre="Science Fiction"
movie.country = 'USA'
movie.availableOnPlatform = true
delete movie.language
delete movie.year
movie.releaseYear=2014
console.log(movie)
// 
// 
// 
// 
let computer = {
    brand: "Lenovo",
    model: "Legion 5",
    ram: 16,
    storage: 512,
    processor: "Intel i5",
    graphicsCard: "RTX 3060",
    price: 3200,
    isGaming: true
}
console.log(computer.brand,computer.model,computer.price)
computer.ram = 32
computer.storage=1024
computer.processor='Intel i7'
computer.screenSize=15.6
computer.hasWarrenty=true
delete computer.graphicsCard
delete computer.isGaming
computer.price=3500
computer.operatingSystem='Windows 11'
console.log(computer.ram,computer.storage,computer.processor,computer.operatingSystem)
console.log(computer)
// 
// 
// 
// 
let game = {
    playerName: "Shadow",
    level: 12,
    health: 85,
    coins: 450,
    weapon: "Sword",
    armor: "Steel",
    isAlive: true,
    rank: "Silver"
}
console.log(game['playerName'],game['health'],game['rank'])
game['level'] = 15
game.coins=700
game['weapon']='Dragon Sword'
game['magicPower']=90
game.pet='Wolf'
delete game['armor']
delete game.isAlive
game.achievements=5
game['rank']='Gold'
console.log(game.level,game.pet,game.weapon,game.coins,game.magicPower,game.rank,game.achievements)
console.log(game)
// 
// 
// 
// 
let account = {
    username: "DarkKnight",
    password: "abc12345",
    followers: 2500,
    following: 430,
    posts: 85,
    verified: false,
    email: "dark@gmail.com",
    country: "Georgia",
    theme: "dark",
    notifications: true,
    accountType: "personal"
}
console.log(account['username'],account['followers'],account['email'],account['accountType'])
account['username']='NightWolf'
account['password']='secure9876'
account.followers=5000
account['following']=600
account['likes']=12000
account.bio='Javascript Developer'
account['isPrivate']=false
delete account['country']
delete account.notifications
account['verified']=true
account['theme']='Light'
delete account['accountType']
account['website']='mywebsite.com'
console.log(account.username,account.followers,account.likes,account.bio,account.isPrivate,account.website)
console.log(account)