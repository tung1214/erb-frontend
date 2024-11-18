document.addEventListener('DOMContentLoaded', () => {
const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// const imgBox = document.getElementById('imgBox');
// imgBox.addEventListener('click',function(e){
//     if(e.target === imgBox || e.target.nodeName === 'SPAN'){
//         imgBox.style.display = 'none';
//     }
// })

const form = document.getElementById('loginForm');
const errorMessageDiv = document.getElementById('error-message');
let attemptsLeft = 3; // Declare attempts globally to keep track across submissions

// Add an event listener to validate the form on submit
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear any previous error message
    errorMessageDiv.innerHTML = '';

    // Get the values of the form inputs
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Function to check if the last attempt is hit
    function lasthit() {
        if (attemptsLeft <= 0) {
            errorMessageDiv.innerHTML = '<p style="color: red; font-size: 20px" >Login fail ! Please contact our service department.</p>';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // 2 seconds delay before redirecting
        }
    }

    // Function to validate the input fields and handle attempts
    function validate() {
        // Check if username or password is empty
        if (username === '' || password === '') {
            errorMessageDiv.innerHTML = '<p style="color: red; font-szie: 20px" >Both fields are required.</p>';
            attemptsLeft--; // Deduct an attempt
            lasthit(); // Check if last attempt is reached
        } 
        // Check if password length is at least 8 characters
        else if (password.length < 8) {
            errorMessageDiv.innerHTML = '<p style="color: red; font-size: 20px" >Password must be at least 8 characters long.</p>';
            attemptsLeft--; // Deduct an attempt
            lasthit(); // Check if last attempt is reached
        }
        // Check if the credentials match
        else if (username === "user1" && password === "12345678") {
            // Display success message
            errorMessageDiv.innerHTML = '<p style="color: #2ecc;">Login successful!</p>';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // 2 seconds delay before redirecting
        } 
        // Invalid credentials case
        else {
            errorMessageDiv.innerHTML = '<p style="color: red; font-size: 20px" >Username or password is not valid.</p>';
            attemptsLeft--; // Deduct an attempt
            lasthit(); // Check if last attempt is reached
        }
    }

    // Call the validation function
    validate();
});

})
