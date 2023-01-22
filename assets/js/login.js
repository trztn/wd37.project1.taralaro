function login(){
    const emailLogin = document.getElementById('login-email').value;
    const passLogin = document.getElementById('login-password').value;

    if (emailLogin == 'test@test.com' && passLogin == 'test') {
        alert('You have successfully logged in.')
        localStorage.setItem('isLogged', 'yes');
        window.location.href = 'cpanel.html';
    } else {
        alert('Wrong email or password!');
    }
}
    
function checkIfLogged() {
    loggedIn = localStorage.getItem('isLogged');
    if(loggedIn == 'yes'){
    window.location.href = 'cpanel.html';
    }
}

function logout(){
    localStorage.removeItem('isLogged');
    window.location.href = 'login.html';
}