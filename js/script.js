document.addEventListener('DOMContentLoaded', function () {
  const sameAsDeliveryCheckbox = document.getElementById('sameAsDelivery');
  const deliveryAddress = document.getElementById('deliveryAddress');
  const billingAddress = document.getElementById('billingAddress');
  const creditCardType = document.getElementById('creditCardType');
  const creditCardNumber = document.getElementById('creditCardNumber');

  // Retrieve other necessary elements
  const deliveryOption = document.getElementById('delivery');
  const contactNumber = document.getElementById('contactNumber');
  const emailReceipt = document.getElementById('emailReceipt');
  const payOnlineOption = document.getElementById('payOnline');
  const password = document.getElementById('password');
  const postcode = document.getElementById('postcode'); // Assuming this element exists in the form

  sameAsDeliveryCheckbox.addEventListener('change', function () {
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

  creditCardType.addEventListener('change', function () {
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

  orderForm.addEventListener('submit', function (e) {
    let errors = [];

    if (deliveryOption.checked) {
      if (deliveryAddress.value.trim() === '')
        errors.push('Delivery address is required.');
      if (contactNumber.value.trim() === '')
        errors.push('Contact number is required.');
      if (emailReceipt.value.trim() === '')
        errors.push('Email for receipt is required.');
    }

    if (billingAddress.value.trim() === '')
      errors.push('Billing address is required.');

    if (payOnlineOption.checked) {
      if (creditCardNumber.value.trim() === '') {
        errors.push('Credit card number is required.');
      } else {
        const length = creditCardNumber.value.trim().length;
        switch (creditCardType.value) {
          case 'Visa':
          case 'Mastercard':
            if (length !== 16)
              errors.push('Credit card number must be 16 digits.');
            break;
          case 'American Express':
            if (length !== 15)
              errors.push('Credit card number must be 15 digits.');
            break;
        }
      }
    }

    // Validate password length
    if (password && password.value.length < 8)
      errors.push('Password must be at least 8 characters long.');

    // Validate postcode
    if (postcode && !/^\d{4}$/.test(postcode.value))
      errors.push('Postcode must be a 4-digit number.');

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join('\n'));
    }
  });
});
