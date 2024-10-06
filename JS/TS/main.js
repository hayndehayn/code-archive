// 1. Summarize
var numbers = [1, 2, 3, 4, 5];
var sumArray = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sumArray);

// 2. Create user
function createUser(name, age, isActive) {
    if (isActive === void 0) {
        isActive = true;
    }
    return {
        name: name,
        age: age,
        isActive: isActive,
    };
}
var newUser = createUser("Olha", 86);
console.log(newUser);

// 3. Order status
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[(OrderStatus["Pending"] = 0)] = "Pending";
    OrderStatus[(OrderStatus["Shipped"] = 1)] = "Shipped";
    OrderStatus[(OrderStatus["Delivered"] = 2)] = "Delivered";
    OrderStatus[(OrderStatus["Cancelled"] = 3)] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));

function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return "Замовлення очікує на обробку";
        case OrderStatus.Shipped:
            return "Замовлення було відправлено";
        case OrderStatus.Delivered:
            return "Замовлення доставлено";
        case OrderStatus.Cancelled:
            return "Замовлення скасовано";
        default:
            throw new Error("Невідомий статус замовлення");
    }
}
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
