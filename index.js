// 시간, Good ~ !! 보여주는 코드
const todayTime = document.getElementById('todayTime');

function clock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    todayTime.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
    
    function ment() {
        let ment = document.getElementById('ment');

        if(hours == '19', '20', '21', '22', '23', '0', '1', '2', '3', '4', '5', '6') {
            ment.innerHTML = '<h3>Good Evening !!! </h3>';
        } else if (hours == '7', '8', '9') {
            ment.innerHTML = '<h3>Good Morning !!! </h3>';
        }
    }

    ment();
}

function init() {
    clock();
    setInterval(clock, 1000);
}

init();

const todoForm = document.getElementById('todo-form');
const toDoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function printToDo(createToDo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = createToDo.text;   
    li.appendChild(span);
    todoList.appendChild(li);
}

function submit(event)  {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newTodoObj = {
        text: newToDo
    }
    printToDo(newTodoObj);
}

todoForm.addEventListener("submit", submit);
