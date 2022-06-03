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
const checkBtns = document.querySelectorAll(".check-btn")

const makeNewTodo = (text)=> {
    // 추가할 list element 생성
    const listElement = document.createElement('li')
    listElement.className = "todo"

    // list에 들어갈 요소 생성
    // todo contents
    const todoText = document.createElement('span')
    todoText.className = "todo-text"
    todoText.textContent = text
    // todo trashcan
    const trashIcon = document.createElement('i')
    trashIcon.className = "delete-btn" 
    trashIcon.classList.add("fa-regular", "fa-trash-can")
    addDeleteEvent(trashIcon)  // trash click시 삭제 이벤트 추가
    // todo checkbox
    const checkIcon = document.createElement('i')
    checkIcon.className = "check-btn"
    checkIcon.classList.add("fa-regular", "fa-circle")
    addCheckEvent(checkIcon)
    // list에 요소 추가
    listElement.append(checkIcon, todoText, trashIcon)

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

// check icon 클릭시 이벤트 추가
checkBtns.forEach(addCheckEvent)

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
    if (inputText.value.length === 0) {return}
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

function addCheckEvent(element) {
    element.addEventListener('click', event => {
        const targetTodo = element.parentElement
        const checkBtn = targetTodo.querySelector(".check-btn")
        if (checkBtn.classList.contains("fa-circle")) {
            checkBtn.classList.replace("fa-circle","fa-circle-check")
        } else if (checkBtn.classList.contains("fa-circle-check")) {
            checkBtn.classList.replace("fa-circle-check","fa-circle")
        }
    })
}


