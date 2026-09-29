l1 = ['giorgi' , 'nika', 'saba' , 'ana' ,'lizi']
for (let i = 0; i < l1.length; i++){
    if (l1[i].length > 5 && l1[i][0] === 'g'){
        console.log(l1[i])
    }
}
l2 = [33,621,324,8756,432,875,1324,765,54,8764,8,87]
for (let i = 0; i < l2.length; i++){
    if (l2[i] % 2 === 0 && l2[i] > 100){
        console.log(l2[i])
    }
}
l3 = ['გოგა', 'საბა', 'იოანე']
for (let i = 0; i < l3.length; i++){
    console.log((i + 1)+ ' ' + l3[i])
}