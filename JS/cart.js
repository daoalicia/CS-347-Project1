let subtotal = document.getElementById('subtotal');
let shipping = document.getElementById('shipping');
let tax = document.getElementById('tax');
let total = document.getElementById('total');

const prices = document.querySelectorAll('#price');

function getTotals() {
    let sum = 0;
    for (let price of prices) {
        // get rid of dollar sign
        let num = price.innerHTML.substring(1);
        sum = sum + parseInt(num);
    }
    subtotal.innerHTML = `Subtotal: ${sum}.00`;

    let ship = 7;
    shipping.innerHTML = "Shipping: $7.00";
    if (sum >= 50) {
        shipping.innerHTML = "Shipping: $0.00";
        ship = 0;
    } 

    let taxRate = 0.06;
    let taxes = taxRate * sum;
    tax.innerHTML = `Tax: ${taxes}`;

    let totalSum = sum + ship + taxes;
    total.innerHTML = `Total: ${totalSum}`;
}

getTotals();