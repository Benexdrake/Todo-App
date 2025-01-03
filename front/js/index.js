import { createTaskBlock, createInsertTaskBlock } from "./component.js";
import { getTasks } from "./todo_service.js";

let showTasks = async () =>
{
    let todoList = document.getElementById('todo_list')

    let tasks = await getTasks();

    for(let task of tasks)
    {
        let item = createTaskBlock(task.id, task.task, task.date, task.priority, task.finished);
        todoList.appendChild(item);
    }
}

createInsertTaskBlock();
showTasks();