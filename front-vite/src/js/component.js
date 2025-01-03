import { createTask, updateTask, deleteTask  } from "./todo_service.js";
import {getPriorityColor} from './helper.js'

let task_text = '';
let date = '';
let priority = 1;

export let createInsertTaskBlock = () =>
{
    let inputBlock = document.getElementById('input_block');
    
    let form = document.createElement('form');
    form.action = '';

    let inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.id = 'add_todo_input';

    let select = document.createElement('select');
    select.id = 'priority';

    let option1 = document.createElement('option')
    option1.innerText = 'Prio 1';
    option1.style.backgroundColor = 'red';
    option1.value = 1
    
    let option2 = document.createElement('option')
    option2.innerText = 'Prio 2';
    option2.style.backgroundColor = 'yellow';
    option2.value = 2
    
    let option3 = document.createElement('option')
    option3.innerText = 'Prio 3';
    option3.style.backgroundColor = 'green';
    option3.value = 3

    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
    
    let inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = 'input_date';

    let submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.id = 'add_todo';

    inputBlock.appendChild(inputText)
    inputBlock.appendChild(select)
    inputBlock.appendChild(inputDate)
    inputBlock.appendChild(submitButton)

    inputText.addEventListener('input', () => {
        task_text = inputText.value
    });

    select.addEventListener('change', () => {
        priority = parseInt(select.value);
    })

    inputDate.addEventListener('change', () => {
        date = inputDate.value
    })
    
    submitButton.addEventListener('click', async () => {
        await createTask(task_text,date,priority);
    })
}

export let createTaskBlock = (id,task,date,priority, finished) =>
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

    let borderColor = getPriorityColor(priority)

    item.style.border = `2px solid ${borderColor}`

    input.type = 'checkbox';
    input.checked = finished;
    input.addEventListener('change', async () => {
        await updateTask(id,task,date,priority,input.checked)
    })
    span.className = 'todo_text';
    span.innerText = task;
    
    button.className = 'delete_button';
    button.innerText = 'X'
    button.addEventListener('click', async () => {
        item.remove();
        await deleteTask(id);
    })

    p.style.textAlign = 'end';
    p.innerText = date

    mid.appendChild(p)
    div2.appendChild(input)
    mid.appendChild(span)
    right.appendChild(button)

    return item;
}