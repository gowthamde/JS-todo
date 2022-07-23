let todoList = [];
function addItem() {
    console.log('adding item to the list...');
    let name = document.getElementById('taskName').value;
    document.getElementById('taskName').value = '';
    let date = document.getElementById('taskDate').value;
    document.getElementById('taskDate').value = '';
    let obj = {
        taskName: name,
        taskDate: date
    }
    todoList.push(obj);
    if (todoList.length > 0) {
        let ul = document.getElementById('list-box');
        for (item of todoList) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(item.taskName + " on " + item.taskDate));
            li.classList.add('item-style')
            ul.appendChild(li);
        }
    }
}