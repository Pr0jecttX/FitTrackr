// Auth state management
function updateAuthNav() {
    const authNav = document.getElementById('authNav');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        authNav.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="#" data-page="profile">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="logoutButton">Logout</a>
            </li>
        `;
        document.getElementById('logoutButton').addEventListener('click', logout);
    } else {
        authNav.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="#" data-page="login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" data-page="register">Register</a>
            </li>
        `;
    }
}

// Initialize login form
function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Get users from local storage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                updateAuthNav();
                showFlashMessage('Successfully logged in!');
                navigateTo('home');
            } else {
                showFlashMessage('Invalid email or password', 'danger');
            }
        });
    }
}

// Initialize register form
function initializeRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                document.getElementById('passwordMismatch').style.display = 'block';
                return;
            }
            
            // Get existing users
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Check if email already exists
            if (users.some(user => user.email === email)) {
                showFlashMessage('Email already registered', 'danger');
                return;
            }
            
            // Add new user
            const newUser = { username, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            showFlashMessage('Registration successful! Please login.');
            navigateTo('login');
        });
    }
}

// Logout function
function logout(e) {
    e.preventDefault();
    localStorage.removeItem('user');
    updateAuthNav();
    showFlashMessage('You have been logged out');
    navigateTo('home');
}

// Initialize auth state on page load
document.addEventListener('DOMContentLoaded', updateAuthNav);
