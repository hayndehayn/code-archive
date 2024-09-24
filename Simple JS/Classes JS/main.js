//#1
class CalorieCalculator {
  constructor(products) {
    this.products = new Map();
  }
  
  addProduct(productName, calories) {
    this.products.set(productName, calories);
  }

  getProductCalories(productName) {
    const calories = this.products.get(productName);
    return calories !== undefined ? calories : 'Product not found'; 
  }

  removeProduct(productName) {
    this.products.delete(productName);
  }
}

const calorieCalculator = new CalorieCalculator()
calorieCalculator.addProduct('Persyk', 52)
calorieCalculator.addProduct('Banana', 89)

console.log(calorieCalculator.getProductCalories('Persyk')) // 52
console.log(calorieCalculator.getProductCalories('Banana')) // 89

calorieCalculator.removeProduct('Persyk')
console.log(calorieCalculator.getProductCalories('Persyk')) // Product not found



//! #2
class UniqueUsernames {
  constructor() {
    this.users = new Set();
  }

  addUser(username) {
    this.users.add(username); 
  }

  exists(username) {
    return this.users.has(username);
  }

  count() {
    return this.users.size
  }
}

const uniqueUsernames = new UniqueUsernames();
uniqueUsernames.addUser('john_doe');
uniqueUsernames.addUser('jane_doe');
uniqueUsernames.addUser('john_doe'); // Ця дія не змінить набір

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`); // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`); // 2
