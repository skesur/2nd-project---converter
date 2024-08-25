
// let a = prompt("primary number","");
// let b = prompt("secondary number","");
// const c = parseInt(a) + parseInt(b);
// console.log("The sum of "+a+" and "+b+" is : "+c);

// let a = prompt("number","");
// const b = Math.sqrt(a);
// console.log(b);

// 
// let a = 10;
// let b = 10;
// let c = 10;
// const sa = (a+b+c)/2;
// const sb = sa*(sa-a)*(sa-b)*(sa-c);
// const sc = Math.sqrt(sb);
// console.log("The area of the triangle is :",sc);

function convert1(){
    let usd = document.getElementById('data1').value;
    const factor = 83.95;
    let inr = usd*factor;
    document.getElementById('res1').innerText = inr + ' inr';
}
function convert2() {
    let celsius = document.getElementById('data2').value;
    let fahrenheit = celsius*1.8 + 32;
    document.getElementById('res2').innerText = `${celsius} C = ${fahrenheit} F`;
}
function convert3() {
    let value = document.getElementById('data3').value;
    let number = Math.sign(value);
    switch (number) {
        case -1:
            document.getElementById('res3').innerText = `The ${value} is a negative number.`
            break;
        case 0:
            document.getElementById('res3').innerText = `The given number is zero.`
            break;
        case 1:
            document.getElementById('res3').innerText = `The ${value} is a positive number.`
            break;
    
        default:
            document.getElementById('res3').innerText = `The ${value} is NaN.`
            break;
    }
}
// let number = prompt(`Enter the number :`,``);

// if (number == 1) {
//     console.log(`The ${number} is not a prime number.`)
//   }
// else if (number < 1) {
//     console.log(`The ${number} is not a prime number.`)
// }
// else{
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         let ch = `The ${number} is not a prime number.`;
//         console.log(ch)
//         break;
//     }
//     else {
//         let ch = `The ${number} is a prime number.`;
//         console.log(ch);
//     }
//    }
//}


