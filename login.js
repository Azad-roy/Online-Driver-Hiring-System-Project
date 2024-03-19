// Smooth Scroll:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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

// Toggle Visibility:
document.querySelector(".login-methods a").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".login-form").classList.toggle("hidden");
});

// Responsive Navbar:
function toggleMenu() {
    var menu = document.querySelector(".navbar ul");
    menu.classList.toggle("responsive");
}


document.querySelector(".navbar .icon").addEventListener("click", toggleMenu);

document.querySelector("#signup").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".modal").style.display = "block";
});

// Dynamic Footer Date:
document.querySelector(".close").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".modal").style.display = "none";
});
