import { createTask, getTasks, updateTask, deleteTask  } from "./todo_service";

let createTodo = (id,task,date,priority, finished) =>
{
    let item = document.createElement('li')
    item.className = 'todo';

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let left = document.createElement('div')
    let mid = document.createElement('div')
    let right = document.createElement('div')

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

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = finished;
    input.addEventListener('change', (event) => {
        console.log(input.checked)
    })
    let span = document.createElement('span')
    span.className = 'todo_text';
    span.innerText = task;
    let button = document.createElement('button')
    button.className = 'delete_button';
    button.innerText = 'X'
    button.addEventListener('click', () => {
        // Send delete with Service to API
        // Maybe a 'Are u sure?' Question first
        item.remove();
    })

    let p = document.createElement('p')
    p.style.textAlign = 'end';
    p.innerText = date.toLocaleDateString()

    mid.appendChild(p)
    div2.appendChild(input)
    mid.appendChild(span)
    right.appendChild(button)

    return item;
}

// Show Todos
let showTodos = async () =>
{
    let tasks = await getTasks();

    console.log(tasks)

    let todoList = document.getElementById('todo_list');
    for(let i = 0; i < 5; i++)
    {
        let item = createTodo(1, "I want to buy Bananas for DK", new Date(), 2, true);
        todoList.appendChild(item);
    }
}

// Filter Todos by X

showTodos();