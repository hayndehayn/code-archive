//! #1 
function counter(start = 0) {
    let count = start;
    return () => {
        return count++;
    };
}

const myCounter = counter(100);
console.log(myCounter()); // 100
console.log(myCounter()); // 101


//! #2
function counterFactory() {
    let count = 0;
    return {
        value: (newValue) => {
            if (newValue !== undefined) {
                count = newValue;
            }
        return count;
        },
        increment: () => count++,
        decrement: () => count--
    };
}
const mCounter = counterFactory();
mCounter.value(10); // 10
mCounter.increment(); // 11
const currentValue = mCounter.value();
console.log(currentValue);
console.log(mCounter.value());


//! #3 
const myPrint = (a, b, res) => {
    return `${a}^${b}=${res}`;
}

const myPow = (a, b, callback) => {
    if (b === 0) {
        return callback(a, b, 1);
    }
    else if (b > 0) {
        return callback (a, b, a * myPow(a, b - 1, callback));
    } else {
        return callback(a, b, 1 / myPow(a, -b, callback));
    }
}
console.log(myPow(3, 4, myPrint))
console.log(myPow(2, 3, myPrint))
console.log(myPow(2, -2, myPrint))

//! #4
const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = (arr) => {
    return Math.max.apply(null, arr);
}
console.log(myMax(list)); // 233


//! #5
const myMul = (a, b) => {
    return a * b
}
const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);
console.log(myDouble(3))
console.log(myTriple(3))
console.log(myMul(4, 2));