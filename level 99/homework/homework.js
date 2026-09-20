let prices = [120, 45, 300, 80, 150, 25, 400]
for (let i = 0; i < prices.length; i++){
    if (prices[i] > 100){
        prices[i] = prices[i] - prices[i] / 5
    }
    else if (prices[i] >50 && prices[i] <= 100){
        prices[i] = prices[i] - prices[i] / 10
    }
}
for (let i = prices.length - 1; i > -1 ; i--){
    console.log(prices[i])
}

let messages = [
  "  Hello Goga  ",
  "JAVASCRIPT is fun",
  "  I LOVE CODING ",
  "React is awesome",
  "  Learn JavaScript  "
];
