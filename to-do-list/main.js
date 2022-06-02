// let data = localStorage.getItem('todoData');
// if (!data) {
//     localStorage.setItem('todoData', JSON.stringify(todoData))
// }
// data = JSON.parse(discussions)

// import data from "./dummy-todo.js";

console.log(dummyData)

const todoLists = document.querySelector(".todos")
const inputBtn = document.querySelector(".add-btn")
const deleteBtns = document.querySelectorAll(".delete-btn")

const makeNewTodo = (text)=> {
    // 추가할 list element 생성
    const listElement = document.createElement('li')
    listElement.className = "todo"
    // list에 들어갈 요소 생성
    const todoText = document.createElement('span')
    todoText.className = "todo-text"
    todoText.textContent = text
    const trashIcon = document.createElement('i')
    trashIcon.className = "delete-btn" 
    trashIcon.classList.add("fa-regular", "fa-trash-can")
    addDeleteEvent(trashIcon)  // trash click시 삭제 이벤트 추가
    // list에 요소 추가
    listElement.append(todoText, trashIcon)

    return listElement
}

dummyData.forEach(todoData => {
    if (!todoData.isDone) {
        const Todo = makeNewTodo(todoData.todoText)
        todoLists.append(Todo)
    }
})
// trash icon 클릭시 삭제 이벤트 추가
deleteBtns.forEach(addDeleteEvent)

// add btn 클릭시 input내용 todo에 추가
inputBtn.addEventListener('click', addTodotext)

// enter누를 때 input내용 todo에 추가
function addTodoWhenEnter() {
    if (window.event.keyCode == 13) {
        addTodotext()
    }
}
document.querySelector('.todo-inp').setAttribute("onkeyup","addTodoWhenEnter()")

// add event callback
function addTodotext(e) {
    const inputText = document.querySelector(".todo-inp")
    todoLists.append(makeNewTodo(inputText.value)) //todo에 추가
    inputText.value = ""    // input내용 삭제    
}

function addDeleteEvent(element) {
    element.addEventListener('click', event => {
        console.log("clicked")
        const targetTodo = element.parentElement
        targetTodo.remove()
    })
}


