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


/* The function should return an array that contains only even numbers generated within a loop. */
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
        : n < 24
        ? 'Дитинство'
        : n < 44
            ? 'Молодість'
            : n < 65
            ? 'Зрілість'
            : n < 75
                ? 'Старість'
                : n < 90
                    ? 'Довголіття'
                    : 'Рекорд';
}
console.log(ageClassification(13))
console.log(ageClassification(30))
console.log(ageClassification(73))


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
/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотнього виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */

// function mainFunc(a, b, cb) { }

/*
 * Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.
 * Використовуйте Math для піднесення до ступеня (Math.pow) та генерації випадкових чисел (Math.floor, Math.random).
 */

// cbRandom(a, b) - обчислює і повертає довільне ціле число в діапазоні між a і b включно.
// function cbRandom(min, max) { }

// cbPow(a, b) - обчислює і повертає результат піднесення числа a у ступінь b.
// function cbPow(num, pow) { }

// cbAdd(a, b) - обчислює і повертає суму двох чисел a і b.
// function cbAdd(a, b) { }

/*
 * mainFunc() повинна повертати результат роботи переданої їй поворотної функції, наприклад:
 * mainFunc(2, 5, cbRandom) → випадково від 2 до 5 включно
 * mainFunc(10, 30, cbRandom) → випадково 10..30 включно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

// console.log(mainFunc(2, 5, cbRandom)) // цілі числа в діапазоні 2..5
// console.log(mainFunc(2, 5, cbPow)) // 32
// console.log(mainFunc(2, 5, cbAdd)) // 7
// console.log(mainFunc(2, 5, 'not a func')) // false
