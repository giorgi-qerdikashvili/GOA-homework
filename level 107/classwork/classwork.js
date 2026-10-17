const scores = [0 ,45, 80, 25, 90, 60, 35, 100, 70]
let sum = scores.reduce((a,b) => {
    if(b >=50){
        return a += b
    }
    return a
})  
console.log(sum)