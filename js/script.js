document.addEventListener('DOMContentLoaded', function() {
    const sameAsDeliveryCheckbox = document.getElementById('sameAsDelivery');
    const deliveryAddress = document.getElementById('deliveryAddress');
    const billingAddress = document.getElementById('billingAddress');

    sameAsDeliveryCheckbox.addEventListener('change', function() {
        if (this.checked) {
            if (deliveryAddress.value.trim() === '') {
                alert('Please enter your delivery address first.');
                this.checked = false;
            } else {
                billingAddress.value = deliveryAddress.value;
            }
        } else {
            billingAddress.value = '';
        }
    });
});

function handleOrderTypeChange() {
    const deliveryAddressDiv = document.getElementById('deliveryAddress');
    const radios = document.getElementsByName('orderType');
    if (radios[0].checked) {
        deliveryAddressDiv.style.display = 'block';
    } else {
        deliveryAddressDiv.style.display = 'none';
    }
}

function handlePaymentMethodChange() {
    const creditCardInfoDiv = document.getElementById('creditCardInfo');
    const radios = document.getElementsByName('paymentMethod');
    if (radios[1].checked) {
        creditCardInfoDiv.style.display = 'block';
    } else {
        creditCardInfoDiv.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const creditCardType = document.getElementById('creditCardType');
    const creditCardNumber = document.getElementById('creditCardNumber');

    creditCardType.addEventListener('change', function() {
        switch (this.value) {
            case 'Visa':
            case 'Mastercard':
                creditCardNumber.setAttribute('maxlength', '16');
                break;
            case 'American Express':
                creditCardNumber.setAttribute('maxlength', '15');
                break;
        }
    });
});
