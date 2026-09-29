function names(){
    return 'this is a default name'
}
console.log(names())
function tripT(nam1 = 33,nam2 = 2, nam3 = -4){
    console.log(`this is ${nam1} with ${nam2} and ${nam3}`)
}
tripT()
tripT('anaa')
tripT('anaa', 'lemon')
tripT('anaa', 'lemon', 'ice')