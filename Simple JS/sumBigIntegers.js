function sumBigIntegers(numStr1, numStr2) {
  const bigInt1 = BigInt(numStr1);
  const bigInt2 = BigInt(numStr2);

  const sum = bigInt1 + bigInt2
  return sum
}

console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n