// Form Validation:
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Your form submission logic here
        alert("Form submitted successfully!");
    }
});