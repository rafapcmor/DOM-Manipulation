const list = document.querySelector('ul');
const input = document.querySelector('input');
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');

button1.onclick = function() {
    let myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listBtn.className = "btn btn-outline-danger mb-2"
    listItem.className = "mb-2"
    listText.className = "mb-5 mr-3"

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();
}

button2.onclick = function() {
    let myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listBtn.className = "btn btn-outline-danger mb-2"
    listItem.className = "mb-2"
    listText.className = "mb-5 mr-3"

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    list.insertBefore(listItem, list.firstElementChild);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();
}