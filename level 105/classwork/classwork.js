let l1 = ['ade' ,'liza', 'nino','luka','varlam']
l1.forEach(element => {
    if (element.length > 4){
        console.log(element)
    }
});

l1 = [23 ,12, 301, 2, 44, 9]
l1.forEach((element, index)=>{
    if ((element % 2 === 1) && (index % 2 === 1)){
        console.log(element, index)
    }
});
let scores = [45, 78, 32, 90, 56, 84, 67];
let newScores = scores.map((item) =>{
    if (item < 60){
        return item += 10
    }
    else if(item >= 60){
        return item += 5
    }
})
console.log(newScores)