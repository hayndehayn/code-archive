const someFunc = (num1, num2) => {
    let res = num1 + num2
    return `${num1} + ${num2} = ${res}`;
}

console.log(someFunc(2, 4))
console.log(someFunc(Math.random(0,10), Math.random(0,10)))
