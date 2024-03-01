function validateLogin() {
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    
    if (username === 'AdminSEF123' && password === 'SeF@ctORy$$456') {  
        window.location.href = 'todo.html';
    } else {
        alert('Invalid username or password. Please try again.');
        passwordInput.value = '';
    }
}