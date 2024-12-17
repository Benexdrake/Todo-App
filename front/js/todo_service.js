// Needed:
const url = 'http://localhost:8000'

// Create Task and Send to API
export let createTask = async (task, date, priority, finished) => 
{
    await fetch(`${url}/add-tasks`, {task, date, priority, finished});
}

// Get Tasks from API
export let getTasks = async () => 
{
    return await fetch(`${url}/get-tasks`).then(x => {return x.json()});
}
    
// Update Task and Send Update to API
export let updateTask = async (id, task, date, priority, finished) =>
{
    await fetch(`${url}/update-task`, {id, task, date, priority, finished});
}


// Delete Task and Delete send to API
export let deleteTask = async (task_id) =>
{
    await fetch(`${url}/delete-task/${task_id}`, {method:'DELETE'});
}