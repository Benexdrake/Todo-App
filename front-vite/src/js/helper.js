export let getPriorityColor = (priority) =>
{
    let borderColor = 'red';
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
    return borderColor;
}