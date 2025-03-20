document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (el) {
        el.textContent = '';
        el.style.display = 'none';
    });

    // Validate required fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const vehicleReg = document.getElementById('vehicleReg').value.trim();

    let isValid = true;

    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First Name is required!';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last Name is required!';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    if (!phone) {
        document.getElementById('phoneError').textContent = 'Phone Number is required!';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    if (!vehicleReg) {
        document.getElementById('vehicleRegError').textContent = 'Vehicle Registration Number is required!';
        document.getElementById('vehicleRegError').style.display = 'block';
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Uncomment the line below to actually submit the form
        // this.submit();
    }
});