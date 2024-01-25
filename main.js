let num1 = 1;
let num2 = 1;
let sum = 0;

for (let i= 0; i < 50; i++) {
    sum = num1 + num2;
    alert(`${num1} + ${num2} = ${sum}`) ;
    num1 = num2;
    num2 = sum;
}