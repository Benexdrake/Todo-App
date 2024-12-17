// Needed:
const url = 'http://localhost:8000'

let requestOptions = (item, method) => 
{
    return {
        method,
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(item) 
    };
}


// Create Task and Send to API
export let createTask = async (task, date, priority) => 
{
    let item = {"task_id":0, task, date, priority, "finished":false};
    return await fetch(`${url}/add-task`, requestOptions(item, 'POST'));
}

// Get Tasks from API
export let getTasks = async () => 
{
    return await fetch(`${url}/get-tasks`).then(x => {return x.json()});
}
    
// Update Task and Send Update to API
export let updateTask = async (task_id, task, date, priority, finished) =>
{
    let item = {task_id,task, date, priority, finished};
    console.log(item)
    await fetch(`${url}/update-task`, requestOptions(item, 'PUT'));
}


// Delete Task and Delete send to API
export let deleteTask = async (task_id) =>
{
    await fetch(`${url}/delete-task/${task_id}`, {method:'DELETE'});
}