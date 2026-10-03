// 1) https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
function check(a, x) {
  return a.includes(x)  
}
// 2) https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
function inAscOrder(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i-1]> arr[i]) {
      return false
    }
  }
  return true
}
// 3) https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
function drawStairs(n) {
  let re = ''
  for(let i = 0; i <n; i++){
    if(i == n-1){
      re+=' '.repeat(i)+'I'
    }
    else{
      re+=' '.repeat(i)+'I\n'
    }
  }
  return re
}
// 4) https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
function largest(n, array) {
  let l1 = []  
  for(let i = 0; i < n; i++){
    l1.push(Math.max(...array))
    array.splice(array.indexOf(Math.max(...array)), 1)
  }
  l1.sort((a,b) => a - b )
  return l1;
}
// 5) https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit){
  for (i of a){
    if (i > limit){
      return false
    }
  }
  return true
}