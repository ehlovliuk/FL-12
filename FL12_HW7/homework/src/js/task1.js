let userEmail = prompt('Enter your email');
let email1 = 'user@gmail.com';
let email2 = 'admin@gmail.com';
let userPassword;
let changingPassword;
let repeatOldPassword;
let NewPassword;
let repeatNewPassword;
let emailMinSymbols = 5;
let passwordMinSymbols = 6;
if (userEmail === null || userEmail.trim() === '') {
    alert('Canceled');
} else if (userEmail.length < emailMinSymbols) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (userEmail === email1 || userEmail === email2) {
    userPassword = prompt('Enter your password');
    if (userPassword === null || userPassword.trim() === '') {
        alert('Canceled');
    } else if (userEmail===email1&&userPassword==='UserPass' || userEmail === email2 && userPassword === 'AdminPass') {
        changingPassword = confirm('Do you want to change your password?');
        if (changingPassword) {
            repeatOldPassword = prompt('Enter old password');
            if (repeatOldPassword === null || repeatOldPassword.trim() === '') {
                alert('Canceled');
            } else if
            (repeatOldPassword === userPassword) {
                NewPassword = prompt('Create new password');
                if (NewPassword === null || NewPassword.trim() === '') {
                    alert('Canceled');
                } else if
                (NewPassword.length < passwordMinSymbols) {
                    alert("It's too short password. Sorry.");
                } else {
                    repeatNewPassword = prompt('Repeat your new password');
                    if (repeatNewPassword === null || repeatNewPassword.trim() === '') {
                        alert('Canceled'); 
                    } else if 
                    (repeatNewPassword === NewPassword) {
                        alert('You have succesfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            } else {
                alert('Wrong old password');
            }
        } else {
            alert('You have failed the change.')
        }
    } else {
        alert('Wrong password')
    }
} else {
    alert("I don't know you")
}