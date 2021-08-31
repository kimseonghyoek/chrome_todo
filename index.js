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
        } else if (hours == '7', '8', '9', '10', '11') {
            ment.innerHTML = '<h3>Good Morning !!! </h3>';
        } else if (hours == '12', '13', '14', '15', '16', '17', '18') {
            ment.innerHTML = '<h3>Good Afternoon !!! </h3>'
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

let todos = [];

function printToDo(createToDo) { 
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.id = createToDo.id;
    button.innerText = '❌';
    span.innerText = createToDo.text; 
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener('click', function() {
        deleteToDo(createToDo.id)
    })
}

function deleteToDo(todoid) {
    document.getElementById(todoid).remove();
    let list;
    for(i = 0; i < todos.length; i++) {
        if(todoid == todos[i].id) {
          list = i;
          break;
        }
    }
    todos = todos.splice(list, 1);
    console.log(todos.length);
 }

function submit(event)  {
    event.preventDefault();

    const newToDo = toDoInput.value;

    const newTodoObj = {
        text: newToDo,
        id: '1231242'

    }
    todos.push(newTodoObj);

    if(toDoInput.value == '' || toDoInput.value == null) {
        alert('빈 칸 인데...?');
        return false;
    }

    printToDo(newTodoObj); 
    toDoInput.value = '';
    console.log(todos);

    function noEnter(e) {
        if(todos.length > 9) {
            alert('10개 이상은 입력 금지입니다.');
            toDoInput.disabled = true;
        }
        if(todos.length < 9) {
            toDoInput.disabled = false;
        }
    }
    
    noEnter();
}

todoForm.addEventListener("submit", submit);