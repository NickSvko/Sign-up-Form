const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPass');
const errorMsg = document.querySelector('.error');

confirmPass.addEventListener('keyup', () => {
    if(pass.value !== confirmPass.value) {
        errorMsg.textContent = '⋆ Passwords do not match';
        confirmPass.style.border = '1px solid rgb(170, 21, 21)';

    }
    else {
        errorMsg.textContent = '';
        confirmPass.style.border = '1px solid rgb(241, 233, 233)';
    }
})

pass.addEventListener('keyup', () => {
    if(confirmPass.value !== pass.value) {
        errorMsg.textContent = '⋆ Passwords do not match';
        confirmPass.style.border = '1px solid rgb(170, 21, 21)';
    }
    else {
        errorMsg.textContent = '';
        confirmPass.style.border = '1px solid rgb(241, 233, 233)';
    }
})