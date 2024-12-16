console.log('Hello World');

let createTodo = (todo) =>
{
    let item = document.createElement('li')
        item.className = 'todo';

        let input = document.createElement('input');
        input.type = 'checkbox';
        input.addEventListener('change', (event) => {
            console.log(event)
        })

        let span = document.createElement('span')
        span.className = 'todo_text';
        span.innerText = 'Hallo Welt';

        let button = document.createElement('button')
        button.className = 'delete_button';
        button.innerText = 'X'
        button.addEventListener('click', () => {
            // Send delete with Service to API
            // Maybe a 'Are u sure?' Question first
            item.remove();
        })

        item.appendChild(input)
        item.appendChild(span)
        item.appendChild(button)

        return item;
}

// Show Todos
let showTodos = () =>
{
    let todoList = document.getElementById('todo_list');
    for(let i = 0; i < 5; i++)
    {
        let item = createTodo(undefined);
        todoList.appendChild(item);
    }
}

// Filter Todos by X

showTodos();