// Needed:
const url = 'http://localhost:5555'

// Create Todo and Send to API
export let createTodo = async (task, date, priority) => 
{
    await fetch(`${url}/create_item`, {task, date, priority});
}

// Get Todos from API
export let getTodo = async () => 
{
    return await fetch(`${url}/get_items`).then(x => {return x.json()});
}
    
// Update Todo and Send Update to API
export let updateTodo = async (id, task, date, priority) =>
{
    await fetch(`${url}/create_item`, {id, task, date, priority});
}


// Delete Todo and Delete send to API
export let deleteTodo = async (task_id) =>
{
    await fetch(`${url}/delete_item/${task_id}`, {task, date, priority});
}