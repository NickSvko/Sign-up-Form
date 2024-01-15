const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPass');
const passError = document.querySelector('.passwordError');
const createAccountBtn = document.querySelector('.createAccountBtn');

confirmPass.addEventListener('keyup', () => {
    if(pass.value !== confirmPass.value) {
        passError.textContent = '⋆ Passwords do not match';
        confirmPass.style.border = '1px solid rgb(170, 21, 21)';
        createAccountBtn.disabled = true;
    }
    else {
        passError.textContent = '';
        confirmPass.style.border = '1px solid rgb(241, 233, 233)';
        createAccountBtn.disabled = false;
    }
})


pass.addEventListener('keyup', () => {
    if(confirmPass.value !== pass.value) {
        passError.textContent = '⋆ Passwords do not match';
        confirmPass.style.border = '1px solid rgb(170, 21, 21)';
        createAccountBtn.disabled = true;
    }
    else {
        passError.textContent = '';
        confirmPass.style.border = '1px solid rgb(241, 233, 233)';
        createAccountBtn.disabled = false;
    }
})




