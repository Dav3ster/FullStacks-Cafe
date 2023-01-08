function showOrderList() {
    var orderList = document.querySelector('.checkoutOrder')
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    let orderItems = '';
    for (let orderItemName of customerOrder) {
        orderItems += '<li>' + orderItemName.name + orderItemName.price + '</li>';
    }
    console.log(orderItems)
    console.log(customerOrder[0].price)
    orderList.innerHTML = orderItems;

    }

function showOrderCost() {
    var customerOrder = JSON.parse(localStorage.getItem("customerOrder"));
    console.log(customerOrder)
    console.log(customerOrder[0].price)
    var itemPrices = [];
    for (i = 0; i < customerOrder.length; i++) {
        itemPrices.push(customerOrder[i].price)
    }
    console.log(itemPrices)
    var sum = 0 
    for (let i = 0; i < itemPrices.length; i++) {
        sum += itemPrices[i];
    }
    console.log(sum)
    var taxRate = 0.07
    var addTax = sum*taxRate
    console.log(addTax)
    var withTax = sum + addTax
    console.log(withTax)
    var roundedTotal = Number((withTax).toFixed(2))
    console.log(roundedTotal)
    var orderTotal = document.getElementById('orderTotal');
    orderTotal.innerHTML = " " + roundedTotal;
}

window.onload = showOrderList(),
showOrderCost();