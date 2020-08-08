// Write your code here!

let main = document.querySelector("#main")
main.remove()

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Gitanjali is the champion";

document.querySelector("body").appendChild(newHeader);