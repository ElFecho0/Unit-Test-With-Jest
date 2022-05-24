console.log("Hola Mundo");

function sum(a,b){
    return a + b;
}
console.log(sum(14,9));



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(e) {
    return e * oneEuroIs.USD
}
console.log(5 + " Euros son " + fromEuroToDollar(5) + " Dolares Estadounidenses");

//si 1.2 usd es 127.9 yen 
//    d           x
function fromDollarToYen(d) {
    return (d * oneEuroIs.JPY)/oneEuroIs.USD
}
console.log(7 + " Dolares son " + Math.floor(fromDollarToYen(7)) + " Yenes aprox");

//si 127.9   es    0.8
//     y            x
function fromYanToPound(y) {
    return (y * oneEuroIs.GBP)/oneEuroIs.JPY
}
console.log(200 + " Yenes es " + Math.floor(fromYanToPound(200)) + " Libra aprox");

module.exports = { fromEuroToDollar,sum,fromDollarToYen,fromYanToPound };