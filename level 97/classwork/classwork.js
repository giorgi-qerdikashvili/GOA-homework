let list = ['sdf' , 'ghj' , 'klz' , 'rty']
list.pop()
list.push(true , 'gigi')
list.shift()
list.unshift('avtomobili')
console.log(list)

let l1 = ['asd' , 'hg' , 'sdd' , '3 ' ,' ']
let l2 = [1 , 4 , 5 , 6 , 5]
l1 = l1.concat(l2)
l1.push(true)
l1.shift()
console.log(l1)

l3 = l1.slice(3,6)
console.log(l3)
console.log(Array.isArray(l3))