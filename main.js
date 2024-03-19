document.addEventListener("DOMContentLoaded", function() {
    // Select the button by its ID
    const btnCenter = document.getElementById("btn-center");

    // Add click event listener to the button
    btnCenter.addEventListener("click", function() {
        // Get the input value
        const name = document.getElementById("nameInput").value;

        // Create a new paragraph element
        const paragraph = document.createElement("p");
        
        // Set the paragraph text to the entered name
        paragraph.textContent = "Hello, " + name + "!";

        // Append the paragraph to the document body
        document.body.appendChild(paragraph);
    });
});
