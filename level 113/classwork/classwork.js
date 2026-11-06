let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
]
let l1 = []
let l2 = []
let l3 = []
products.forEach(e=>{
    console.log(e.name + ' costs: ' +  e.price + 'GEL')
    if (e.inStock){
        l3.push(e)
        console.log(e.name , e.inStock)
    }
    if (e.category === 'Electronics'){
        l1.push(e)
    }
    if (e.price > 500 && e.rating > 4.5){
        l2.push(e)
    }
    if(e.name === 'Monitor' || e.rating < 4){
        console.log(products.findIndex(e))
    }
})
let l4=products.map(a=>`${a.name} - ${a.price}GEL`)
let l5=products
l5.forEach(a=>a.price+=100)
products.some(a=>a.price === 2000)
products.some(a=>a.inStock === false)
products.every(a=>a.price > 100)
products.every(a=>a.rating>3.5)
console.log(l3)
let l6 = l3.map(a=>a.name + ' costs: ' +  a.price + 'GEL')
l6.forEach(a=>console.log(a))