function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('loginEmailError').innerText = "Invalid email address";
        return false;
    } else {
        document.getElementById('loginEmailError').innerText = "";
    }

    if (password.length < 6) {
        document.getElementById('loginPasswordError').innerText = "Password must be at least 6 characters long";
        return false;
    } else {
        document.getElementById('loginPasswordError').innerText = "";
    }

    // Login logic here
    alert("Login successful");
    return true;
}

function validateRegister() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const nameRegex = /^[a-zA-Z]*$/;
    const mobileRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').innerText = "Invalid first name";
        return false;
    } else {
        document.getElementById('firstNameError').innerText = "";
    }

    if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').innerText = "Invalid last name";
        return false;
    } else {
        document.getElementById('lastNameError').innerText = "";
    }

    if (!mobileRegex.test(mobileNumber)) {
        document.getElementById('mobileNumberError').innerText = "Invalid mobile number (must be 10 digits)";
        return false;
    } else {
        document.getElementById('mobileNumberError').innerText = "";
    }

    if (!emailRegex.test(email)) {
        document.getElementById('registerEmailError').innerText = "Invalid email address";
        return false;
    } else {
        document.getElementById('registerEmailError').innerText = "";
    }

    if (password.length < 6) {
        document.getElementById('registerPasswordError').innerText = "Password must be at least 6 characters long";
        return false;
    } else {
        document.getElementById('registerPasswordError').innerText = "";
    }

    // Registration logic here
    alert("Registration successful");
    return true;
}
