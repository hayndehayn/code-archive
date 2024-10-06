// 1. Summarize
const numbers = [1, 2, 3, 4, 5];
const sumArray = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue;}, 0);
console.log(sumArray);

// 2. Create user 
type User = {
  name: string
  age: number
  isActive: boolean
}
function createUser(name: string, age: number, isActive: boolean = true) {
  return {
    name,
    age, 
    isActive
  }
}
const newUser = createUser('Olha', 86);
console.log(newUser);

// 3. 
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled
}

function getOrderStatus(status: OrderStatus) {
  switch(status) {
    case OrderStatus.Pending:
      return 'Замовлення очікує на обробку';
    case OrderStatus.Shipped:
      return 'Замовлення було відправлено';
    case OrderStatus.Delivered:
      return 'Замовлення доставлено';
    case OrderStatus.Cancelled:
      return 'Замовлення скасовано';
    default:
      throw new Error('Невідомий статус замовлення');
  }
}
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus(OrderStatus.Cancelled))