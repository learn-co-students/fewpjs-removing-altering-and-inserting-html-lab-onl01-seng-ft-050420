// Write your code here!
let element = document.querySelector("main#main");
element.remove()

let newHeader = document.createElement('h1');

newHeader.id = 'victory';

document.body.appendChild(newHeader)

newHeader.innerHTML = "YOUR-NAME is the champion";