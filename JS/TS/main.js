var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1. Summarize
var numbers = [1, 2, 3, 4, 5];
var sumArray = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(sumArray);
function createUser(user) {
    return __assign({}, user);
}
// 2. Create object
var newUser = createUser({
    name: 'Olha',
    age: 86,
    isActive: true,
});
console.log(newUser);
// 3. 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    switch (status) {
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
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
