let password = document.getElementById('password');
let confirmPW = document.getElementById('confirm');
let createAccountBtn = document.querySelector('createAccountBtn');

confirmPW.addEventListener('input', passwordMatch);

function passwordMatch() {
   if (password.value === confirmPW.value) {
    password.className = '';
    confirmPW.className = '';
   } else {
       password.classList = 'passErrorMsg';
       confirmPW.classList = 'passErrorMsg';
   }
}