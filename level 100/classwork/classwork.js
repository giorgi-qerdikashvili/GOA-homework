l1 = ['n1','n2','n3','n4','n5']
let i = 0
do{
    if(l1[i].length < 4){
        console.log(l1[i])
    }
    i++
}while(i < l1.length)

i = 0
while(i < l1.length){
    if(l1[i].length < 4){
        console.log(l1[i])
    }
    i++
}
l2 = [32 , 545 , 33 , 2 , 10 , 4 , 2 , 5]
i = 0
for (i; i<l2.length; i++){
    if(l2[i] < 50){
        console.log(l2[i])
    }
    else{
        console.log(`num which is greater than 50 is found ${l2[i]}`) 
        break
    } 
}