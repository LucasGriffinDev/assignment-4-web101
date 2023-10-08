document.addEventListener('DOMContentLoaded', function() {
    const sameAsDeliveryCheckbox = document.getElementById('sameAsDelivery');
    const deliveryAddress = document.getElementById('deliveryAddress');
    const billingAddress = document.getElementById('billingAddress');
    const creditCardType = document.getElementById('creditCardType');
    const creditCardNumber = document.getElementById('creditCardNumber');


    // form validation
    const orderForm = document.getElementById('orderForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const termsCheckbox = document.getElementById('terms');

    
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
    orderForm.addEventListener('submit', function(e) {
        let errors = [];

        if (deliveryOption.checked) {
            if (deliveryAddress.value.trim() === '') errors.push('Delivery address is required.');
            if (contactNumber.value.trim() === '') errors.push('Contact number is required.');
            if (emailReceipt.value.trim() === '') errors.push('Email for receipt is required.');
        }

        if (billingAddress.value.trim() === '') errors.push('Billing address is required.');

        if (payOnlineOption.checked) {
            if (creditCardNumber.value.trim() === '') {
                errors.push('Credit card number is required.');
            } else {
                const length = creditCardNumber.value.trim().length;
                switch (creditCardType.value) {
                    case 'Visa':
                    case 'Mastercard':
                        if (length !== 16) errors.push('Credit card number must be 16 digits.');
                        break;
                    case 'American Express':
                        if (length !== 15) errors.push('Credit card number must be 15 digits.');
                        break;
                }
            }
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join('\n'));
        }
    });
});
