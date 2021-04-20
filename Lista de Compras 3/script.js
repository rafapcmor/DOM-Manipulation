const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
    let myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button1');
    const listBtnR = document.createElement('button2');
    listBtn.className = "btn btn-outline-danger mb-2"
    listBtnR.className = "btn btn-outline-warning mb-2"
    listItem.className = "mb-2"
    listText.className = "mb-5 mr-3"

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtnR);
    listBtnR.textContent = 'Atualizar';
    listItem.appendChild(listBtnR);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);
    listItem.appendChild(listBtn);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }


    listBtnR.onclick = function(e) {

        var input = (prompt('Escreva o novo item:'));
        if (input) {
            var textnode = document.createTextNode(input);
            listItem.replaceChild(textnode, listItem.childNodes[0]);
        }
    }


    input.focus();
}