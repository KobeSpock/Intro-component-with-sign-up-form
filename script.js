/*const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;

    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

//function to check email is valid email
const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //logics for field validity
    if(fnameValue === '') {
        setError(fname, 'First Name cannot be empty');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name cannot be empty');
    } else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

}*/


const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Event listener for input fields to trigger revalidation on user input
const inputFields = [fname, lname, email, password];

inputFields.forEach(input => {
    input.addEventListener('input', () => {
        validateInput(input);
    });

    // Add blur event listener to clear error message on focus out
    input.addEventListener('blur', () => {
        const inputControl = input.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        if (inputControl.classList.contains('success')) {
            errorDisplay.innerText = ''; // Clear error message
        }
    });
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;

    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = (input) => {
    const inputValue = input.value.trim();

    switch (input.id) {
        case 'fname':
            if (inputValue === '') {
                setError(input, 'First Name cannot be empty');
            } else {
                setSuccess(input);
            }
            break;

        case 'lname':
            if (inputValue === '') {
                setError(input, 'Last Name cannot be empty');
            } else {
                setSuccess(input);
            }
            break;

        case 'email':
            if (inputValue === '') {
                setError(input, 'Email cannot be empty');
            } else if (!isValidEmail(inputValue)) {
                setError(input, 'Looks like this is not an email');
            } else {
                setSuccess(input);
            }
            break;

        case 'password':
            if (inputValue === '') {
                setError(input, 'Password cannot be empty');
            } else if (inputValue.length < 8) {
                setError(input, 'Password must be at least 8 characters.');
            } else {
                setSuccess(input);
            }
            break;

        default:
            break;
    }
};

const validateInputs = () => {
    inputFields.forEach(input => {
        validateInput(input);
    });
};
