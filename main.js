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

// Clickable Button Event
document.addEventListener("DOMContentLoaded", () => {
    function createParagraph() {
      const para = document.createElement("p");
      para.textContent = "You clicked the button!";
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll("button");
  
    for (const button of buttons) {
      button.addEventListener("click", createParagraph);
    }
  });
  