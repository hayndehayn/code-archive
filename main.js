/* 1, 2 */
const userObj = {
    firstName: 'Ivan',
    lastName: 'Dehtyarenko',
    age: 34,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(userObj.fullName());


/* 3 */
function defUpperStr(str) {
    return (str || 'DEFAULT TEXT').toUpperCase();
}
console.log(defUpperStr('My text'))
console.log(defUpperStr())
console.log(defUpperStr(null))
console.log(defUpperStr(''))


/* 4, array function loop with even numbers */
function evenFn(n) {
    const evenNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers
}
console.log(evenFn(15));
console.log(evenFn(30));
console.log(evenFn(20));


/* 5 */
function weekFn(day) {
    const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
    if (typeof day !== 'number' || day < 1 || day > 7) {
        return null;
    }
    return daysOfWeek[day - 1];
}

console.log(weekFn(0.5))
console.log(weekFn(4))
console.log(weekFn(1))
console.log(weekFn(6))
console.log(weekFn(-2))
console.log(weekFn(8))



/* 6 using ternary operator */
function ageClassification(n) {
    return n < 0 || n > 122
        ? null
    : n < 24 ? 'Дитинство'
    : n < 44 ? 'Молодість'
    : n < 65 ? 'Зрілість'
    : n < 75 ? 'Старість'
    : n < 90 ? 'Довголіття' : 'Рекорд';
}
console.log(ageClassification(-2))
console.log(ageClassification(13)) 
console.log(ageClassification(30))
console.log(ageClassification(64))
console.log(ageClassification(73))
console.log(ageClassification(122))
console.log(ageClassification(132))


/* 7 using only while */
function oddFn(n) {
    let result = [];
    let i = 1;
    while (i <= n) {
        result.push(i);
        i += 2;
    }
    return result;
}
console.log(oddFn(10)) 
console.log(oddFn(15)) 
console.log(oddFn(20)) 


/* 8, playing with callbacks */
function mainFunc(min, max, callback) {
    if (typeof callback !== 'function') {
        return false;
    }
    return callback(min, max);
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(17, 38, cbRandom))
console.log(mainFunc(13, 50, cbAdd))
console.log(mainFunc(2, 5, cbPow))
console.log(mainFunc(12, 24, 'not a func'))

