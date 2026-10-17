let prices = [20,100,2,500,132,315,15]
let items = ["phone","book","mask","glasses","sticker","bottle","coke"]
for(let i=0; i<prices.length;i++){
    console.log(items[i] + ':',prices[i])
}
// 
// 
// 
// 
const packets = [120, 505, -45, 999, 14, 700, 33, 842]
let packets1 = packets.filter(a=>a%7===0&&a<1000?0:a)
let l1 = packets1.filter(a=>a<1000&&a%3!==0)
// 
// 
// 
// 
const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150]
l1 = (rawEnergies.filter(a=>a>10&&a<150)).map(a=>'Q-'+String((a*3)-5))
console.log(l1)
// 
// 
// 
// 
const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
let c1 = []
tokens_serv1.forEach(a=>a.slice(0,4)==='SEC-'&&a.length>=8?c1.push(true):c1.push(false))
console.log(c1.every(a=>a))
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
c1 = []
tokens_serv1.forEach(a=>a.slice(0,4)==='SEC-'&&a.length>=8?c1.push(true):c1.push(false))
console.log(c1.every(a=>a))
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];
c1 = []
tokens_serv1.forEach(a=>a.slice(0,4)==='SEC-'&&a.length>=8?c1.push(true):c1.push(false))
console.log(c1.every(a=>a))