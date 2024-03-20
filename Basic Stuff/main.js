
  document.addEventListener("DOMContentLoaded", () => {
    // Navigation links functionality
    function handleNavLinkClick(event) {
        event.preventDefault();
        alert("You clicked on " + event.target.textContent);
    }

    const nav = document.querySelector("nav");
    nav.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            handleNavLinkClick(event);
        }
    });

    // Clickable button functionality
    function createParagraph() {
        const para = document.createElement("p");
        para.textContent = "You clicked the button!";
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", createParagraph);
    });
});
