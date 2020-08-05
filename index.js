document.querySelector('main#main').remove();

let hOne = document.createElement('h1');

hOne.setAttribute('id', 'victory');

document.body.appendChild(hOne);

let newHeader = document.getElementById('victory');

newHeader.innerHTML = "Leonardo is the champion";

