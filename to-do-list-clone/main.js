const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    console.log(text);
    // 2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    // 4. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item')
    
    const span = document.createElement('span');
    span.setAttribute('class', 'item__name');
    span.innerText = text;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.append(span)
    itemRow.append(item)
    return itemRow
}

addBtn.addEventListener('click', () => {
    onAdd();
})