// Write your code here!
document.querySelector("#main").remove();
var newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Darrian is the champion!";
document.body.appendChild(newHeader);