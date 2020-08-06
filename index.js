// Write your code here!

const menu = document.getElementById('main')
menu.remove()

//1) index.html
//after index.js is processed
//has a 'newHeader' variable that points to node 'h1#victory':

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "YOUR-NAME is the champion"