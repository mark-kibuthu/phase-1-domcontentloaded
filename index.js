// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element by its ID
    var paragraph = document.getElementById("text");
    
    // Modify its text content
    paragraph.textContent = "This is really cool!";
  });
  
  // This will log immediately when the script loads, before DOMContentLoaded
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  