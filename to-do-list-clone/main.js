const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    const text = input.value;
    console.log(text);
    if (text === "") {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: "center"})
    input.value = '';
    input.focus();
}

function createItem(text) {

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item')
    
    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow)
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.append(name, deleteBtn)
    itemRow.append(item, itemDivider)
    return itemRow
}

addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
})