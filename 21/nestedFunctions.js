function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3
    }
    return deepInnerFunction
  }
  return innerFunction
}

const result = outerFunction(2)(3)(4);
console.log(result); // 24 
