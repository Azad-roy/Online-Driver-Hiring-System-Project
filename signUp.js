document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.signup-container form'); // Modified selector

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        const fullName = signUpForm.querySelector('input[name="fullname"]').value;
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;
        const confirmPassword = signUpForm.querySelector('input[name="confirm_password"]').value;

        // Perform any validation here (e.g., check if passwords match)

        // If validation passes, you can send the data to your server or perform any other actions
        // For now, let's just log the data
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // Optionally, you can redirect the user to another page after successful sign-up
        window.location.href = 'login.html';
    });
});
