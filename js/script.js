document.addEventListener('DOMContentLoaded', function() {
    const sameAsDeliveryCheckbox = document.getElementById('sameAsDelivery');
    const deliveryAddress = document.getElementById('deliveryAddress');
    const billingAddress = document.getElementById('billingAddress');
    const creditCardType = document.getElementById('creditCardType');
    const creditCardNumber = document.getElementById('creditCardNumber');


    // form validation
    const registrationForm = document.getElementById('registrationForm');
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
    registrationForm.addEventListener('submit', function(e) {
        // Array to store all error messages
        let errors = [];

        // Check if required fields are empty
        if (username.value.trim() === '') {
            errors.push('Username is required.');
        }
        if (password.value.trim() === '') {
            errors.push('Password is required.');
        }
        if (password.value.trim().length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }
        if (email.value.trim() === '') {
            errors.push('Email is required.');
        }
        if (address.value.trim() === '') {
            errors.push('Address is required.');
        }
        if (!termsCheckbox.checked) {
            errors.push('You must agree to the terms and conditions.');
        }

        // If there are any errors, prevent form submission and show error messages
        if (errors.length > 0) {
            e.preventDefault(); // Prevents the form from submitting
            alert(errors.join('\n')); // Shows all the errors in an alert (you can choose to display them differently if you like)
        }
    });
});
