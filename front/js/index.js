import { createTask, getTasks, updateTask, deleteTask  } from "./todo_service.js";

let createTodo = (id,task,date,priority, finished) =>
{
    let item = document.createElement('li')
    item.className = 'todo';

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let left = document.createElement('div')
    let mid = document.createElement('div')
    let right = document.createElement('div')
    let button = document.createElement('button')
    let input = document.createElement('input');
    let span = document.createElement('span')
    let p = document.createElement('p')

    left.appendChild(div1)
    left.appendChild(div2)

    item.appendChild(left)
    item.appendChild(mid)
    item.appendChild(right)
    
    mid.style.width = '80%'

    let borderColor = "red"
    switch(priority)
    {
        case 1:
            borderColor = "red";
            break;
        case 2:
            borderColor = "yellow";
            break;
        case 3:
            borderColor = "green";
            break;
    }

    item.style.border = `2px solid ${borderColor}`

    input.type = 'checkbox';
    input.checked = finished;
    input.addEventListener('change', (event) => {
        console.log(input.checked)
    })
    span.className = 'todo_text';
    span.innerText = task;
    
    button.className = 'delete_button';
    button.innerText = 'X'
    button.addEventListener('click', () => {
        // Send delete with Service to API
        // Maybe a 'Are u sure?' Question first
        item.remove();
    })

    p.style.textAlign = 'end';
    p.innerText = date

    mid.appendChild(p)
    div2.appendChild(input)
    mid.appendChild(span)
    right.appendChild(button)

    return item;
}

// Show Todos
let showTodos = async () =>
{
    let todoList = document.getElementById('todo_list');

    let tasks = await getTasks();
    // let tasks = await fetch(`http://localhost:8000/get-tasks`).then(x => {return x.json()});

    for(let task of tasks)
    {
        console.log(task)
        let item = createTodo(task.id, task.task, task.date, task.priority, task.finished);
        todoList.appendChild(item);
    }
}

// Filter Todos by X

showTodos();