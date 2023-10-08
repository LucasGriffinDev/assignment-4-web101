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

document.addEventListener('DOMContentLoaded', function() {
    const sameAsDeliveryCheckbox = document.getElementById('sameAsDelivery');
    const deliveryAddress = document.getElementById('deliveryAddress');
    const billingAddress = document.getElementById('billingAddress');
    const creditCardType = document.getElementById('creditCardType');
    const creditCardNumber = document.getElementById('creditCardNumber');

    // Handle copying the delivery address to the billing address
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



document.addEventListener('DOMContentLoaded', function() {
    const creditCardType = document.getElementById('creditCardType');
    const creditCardNumber = document.getElementById('creditCardNumber');

    creditCardType.addEventListener('change', function() {
        switch (this.value) {
            case 'Visa':
            case 'Mastercard':
                creditCardNumber.setAttribute('maxlength', '16');
                creditCardNumber.setAttribute('minlength', '16');
                break;
            case 'American Express':
                creditCardNumber.setAttribute('maxlength', '15');
                creditCardNumber.setAttribute('minlength', '15');
                break;
        }
    });
});
