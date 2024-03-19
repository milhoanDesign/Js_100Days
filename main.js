// Select all navigation links
var navLinks = document.querySelectorAll("nav ul li a");

// Iterate over each link
navLinks.forEach(function(link) {
    // Add click event listener
    link.addEventListener('click', function(event) {
        // Prevent default action
        event.preventDefault();
        // Display alert dialog
        alert("You clicked on " + this.textContent);
    });
});