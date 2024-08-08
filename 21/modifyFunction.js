// Спочатку множить на 2, а потім результат множить на 3.
function originalFunction(num) {
  return num * 2
}

function modifyFunction(originalFunc, multiplier) {
  return (num) => {
    return originalFunc(num) * multiplier;
  }
}

const modifiedFunc = modifyFunction(originalFunction, 3);
console.log('Original result: ', originalFunction(4)); // 8 
console.log('Modified result: ', modifiedFunc(4)); // 24
