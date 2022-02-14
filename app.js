function updateNumber(product, price, isAdd) {
    let counter = document.getElementById(product + '_counter');
    let counterValue = parseInt(counter.value);
    if (isAdd == true) {
        counterValue = counterValue + 1;
    } else if (counterValue > 0) {
        counterValue = counterValue - 1;
    }
    counter.value = counterValue;

    // Update the price
    let productPrice = document.getElementById(product + '_price');
    productPrice.innerText = counterValue * price;

    // show subtotal
    calculateTotal();

    //============================= Different Way =====================
    /* if (priceDisplay == 'phone_price' ) {
    let phonePrice = document.getElementById(priceDisplay);
    phonePrice.innerText = counterValue * 1299;
    } else if(priceDisplay == 'case_price') {
        let phonePrice = document.getElementById(priceDisplay);
        phonePrice.innerText = counterValue * 59;
    } */
    //==================================================
}

function getInputValue(product) {
    let productInput = document.getElementById(product + '_counter');
    let productPrice = parseInt(productInput.value);
    return productPrice;
}

function calculateTotal() {
    let phonePrice = getInputValue('phone') * 1299;
    let casePrice = getInputValue('case') * 59;
    let subTotal = phonePrice + casePrice;
    let tax = subTotal / 10;
    let totalPrice = subTotal + tax;
    let showSubtotal = document.getElementById('sub_total');
    let taxAmount = document.getElementById('tax_amount');
    let grandTotal = document.getElementById('grand_total');
    showSubtotal.innerText = subTotal;
    taxAmount.innerText = tax;
    grandTotal.innerText = totalPrice;
}

function removeItems(product) {
    let productInput = document.getElementById(product + '_counter');
    let productPrice = document.getElementById(product + '_price');
    productInput.value = 00;
    productPrice.innerText = 00;
    let subTotal = document.getElementById('sub_total');
    let taxAmount = document.getElementById('tax_amount');
    let grandTotal = document.getElementById('grand_total');
    subTotal.innerText = 00;
    taxAmount.innerText = 00;
    grandTotal.innerText = 00;
}

{ /* Handle phone price event */ }

let phonePlusBtn = document.getElementById('phone_plus');
phonePlusBtn.addEventListener('click', function() {
    updateNumber('phone', 1299, true);
});

let phoneMinusBtn = document.getElementById('phone_minus');
phoneMinusBtn.addEventListener('click', function() {
    updateNumber('phone', 1299, false);
});

{ /* Handle Case price event */ }

let casePlusBtn = document.getElementById('case_plus_btn');
casePlusBtn.addEventListener('click', function() {
   updateNumber('case', 59, true);
});

let caseMinusBtn = document.getElementById('case_minus_btn');
caseMinusBtn.addEventListener('click', function() {
    updateNumber('case', 59, false);
});

{ /* Handle remove item */ }

let removePhone = document.getElementById('remove_phone');
removePhone.addEventListener('click', function() {
    removeItems('phone');
});

let removeCase = document.getElementById('remove_case');
removeCase.addEventListener('click', function() {
    removeItems('case');
});