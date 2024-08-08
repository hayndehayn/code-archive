function curriedAdd(a) {
  return (b) => {
    return (c) => {
      const result = a + b + c
      return result
    };
  };
}
console.log(curriedAdd(2)(4)(6))

