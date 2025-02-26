// Page content
const pages = {
    home: `
        <div class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')">
            <div class="hero-overlay">
                <div class="text-center text-white">
                    <h1 class="display-4">Welcome to Fitness Hub</h1>
                    <p class="lead">Transform your body, transform your life</p>
                    <div id="heroButton"></div>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" class="card-img-top" alt="Workout Programs">
                        <div class="card-body">
                            <h5 class="card-title">Workout Programs</h5>
                            <p class="card-text">Discover personalized workout routines for all fitness levels.</p>
                            <a href="#" data-page="workouts" class="btn btn-primary">View Programs</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a" class="card-img-top" alt="BMI Calculator">
                        <div class="card-body">
                            <h5 class="card-title">BMI Calculator</h5>
                            <p class="card-text">Track your fitness progress with our BMI calculator tool.</p>
                            <a href="#" data-page="bmi" class="btn btn-primary">Calculate BMI</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4" class="card-img-top" alt="Member Profile">
                        <div class="card-body">
                            <h5 class="card-title">Member Profile</h5>
                            <p class="card-text">Create your profile and track your fitness journey.</p>
                            <div id="profileButton"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    login: `
        <div class="container my-5">
            <div class="auth-form">
                <h2 class="text-center mb-4">Login</h2>
                <form id="loginForm">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                </form>
                <p class="text-center mt-3">
                    Don't have an account? <a href="#" data-page="register">Register here</a>
                </p>
            </div>
        </div>
    `,
    register: `
        <div class="container my-5">
            <div class="auth-form">
                <h2 class="text-center mb-4">Register</h2>
                <form id="registerForm">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword" required>
                        <div id="passwordMismatch" class="invalid-feedback">
                            Passwords do not match
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                </form>
                <p class="text-center mt-3">
                    Already have an account? <a href="#" data-page="login">Login here</a>
                </p>
            </div>
        </div>
    `
};

// Router implementation
function navigateTo(page) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = pages[page] || 'Page not found';
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Initialize page-specific content
    if (page === 'home') {
        updateHomeButtons();
    } else if (page === 'login') {
        initializeLoginForm();
    } else if (page === 'register') {
        initializeRegisterForm();
    } else if (page === 'workouts') {
        loadWorkouts();
    } else if (page === 'bmi') {
        initializeBMICalculator();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-page]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('data-page'));
        }
    });

    // Initial page load
    navigateTo('home');
});

// Update buttons on home page based on auth status
function updateHomeButtons() {
    const heroButton = document.getElementById('heroButton');
    const profileButton = document.getElementById('profileButton');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        heroButton.innerHTML = '<a href="#" data-page="workouts" class="btn btn-primary btn-lg">View Workouts</a>';
        profileButton.innerHTML = '<a href="#" data-page="profile" class="btn btn-primary">View Profile</a>';
    } else {
        heroButton.innerHTML = '<a href="#" data-page="register" class="btn btn-primary btn-lg">Get Started</a>';
        profileButton.innerHTML = '<a href="#" data-page="register" class="btn btn-primary">Join Now</a>';
    }
}

// Flash message system
function showFlashMessage(message, type = 'success') {
    const flashContainer = document.getElementById('flash-messages');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    flashContainer.appendChild(alert);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

