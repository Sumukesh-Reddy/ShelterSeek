import dataStore from './saidataStore.js';

        // Initialize login page
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide icons
            lucide.createIcons();

            // Get DOM elements
            const loginPage = document.getElementById('loginPage');
            const registerPage = document.getElementById('registerPage');
            const loginOptions = document.getElementById('loginOptions');
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            const loginBackButton = document.getElementById('loginBackButton');
            const goToRegister = document.getElementById('goToRegister');
            const goToLogin = document.getElementById('goToLogin');
            const heroTitle = document.getElementById('heroTitle');
            let selectedType = null;

            // Initialize admin account if it doesn't exist
            if (!dataStore.userExists('admin@ShelterSeek.com')) {
                dataStore.addUser({
                    name: 'Admin',
                    email: 'admin@ShelterSeek.com',
                    password: 'admin123',
                    accountType: 'admin',
                    isAdmin: true,
                    createdAt: new Date().toISOString()
                });
            }

            // Add click handlers to login type buttons
            document.querySelectorAll('.login-button').forEach(button => {
                button.addEventListener('click', () => {
                    selectedType = button.dataset.type;
                    loginOptions.style.display = 'none';
                    loginForm.classList.add('active');
                    
                    const titles = {
                        traveller: 'Welcome Back, Traveler',
                        host: 'Welcome Back, Host',
                        admin: 'Admin Portal'
                    };
                    heroTitle.textContent = titles[selectedType] || 'Welcome Back';
                });
            });

            // Add back button handler
            loginBackButton.addEventListener('click', () => {
                loginOptions.style.display = 'flex';
                loginForm.classList.remove('active');
                selectedType = null;
                heroTitle.textContent = 'Welcome to ShelterSeek';
            });

            // Add login form submit handler
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;

                const user = dataStore.findUser(email, password);

                if (user) {
                    if (user.accountType === selectedType || 
                        (selectedType === 'admin' && user.isAdmin)) {
                        // Store current user in sessionStorage
                        sessionStorage.setItem('currentUser', JSON.stringify({
                            name: user.name,
                            email: user.email,
                            accountType: user.accountType,
                            isAdmin: user.isAdmin || false
                        }));

                        // Redirect based on account type
                        if (user.accountType === 'admin' || user.accountType === 'host') {
                            window.location.href = 'hostweb.html';
                        } else {
                            window.location.href = '/index.html';
                        }
                    } else {
                        alert('Please select the correct account type for your login.');
                    }
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            });

            // Add register form submit handler
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const password = document.getElementById('registerPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const accountType = document.querySelector('input[name="accountType"]:checked').value;

                if (password !== confirmPassword) {
                    alert('Passwords do not match. Please try again.');
                    return;
                }

                if (dataStore.userExists(email)) {
                    alert('This email is already registered. Please sign in or use a different email.');
                    return;
                }

                // Create new user
                const newUser = {
                    name,
                    email,
                    password,
                    accountType,
                    isAdmin: false,
                    createdAt: new Date().toISOString()
                };

                dataStore.addUser(newUser);
                alert('Welcome to ShelterSeek! Your account has been created successfully.');
                
                // Reset form and go to login page
                registerForm.reset();
                goToLogin.click();
            });

            // Navigation between login and register pages
            goToRegister.addEventListener('click', () => {
                loginPage.classList.add('hidden');
                registerPage.classList.remove('hidden');
                heroTitle.textContent = 'Join ShelterSeek';
                loginForm.classList.remove('active');
                loginOptions.style.display = 'flex';
                selectedType = null;
            });

            goToLogin.addEventListener('click', () => {
                registerPage.classList.add('hidden');
                loginPage.classList.remove('hidden');
                heroTitle.textContent = 'Welcome to ShelterSeek';
                registerForm.reset();
            });
        });