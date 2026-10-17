let a=["Apple","Banana","Orange"]
a.forEach(b=>console.log(b))
// 
a=[1,2,3,4]
let b=a.map(a=>a*2)
console.log(b)
// 
a=[2,5,15,8]
b=a.some(a=>a>10)
console.log(b)
// 
a=[2,5,15,8]
b=a.every(a=>a>0)
console.log(b)
// 
a=[2,8,4,10,3]
b=a.filter(a=>a>5)
console.log(b)
// 
a=[10,20,30]
b=a.reduce((a,b)=>a+b,0)
console.log(a)
// 
a=[4,8,15,20]
b=a.findIndex(a=>a>10)
console.log(b)
