const state = {
    counter: 0,
    tasks: []
};
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.querySelector('.task-list');

addTaskBtn.addEventListener('click', handleAddTask);


function handleAddTask(event) {
    if(taskInput.value) {
        state.counter++;
        state.tasks.push({text: taskInput.value, done: false, id: state.counter});
        const newTask = document.createElement('div');
        newTask.innerHTML = `
            <div class="task" key="k-${state.counter}">
                <input 
                    type="checkbox" 
                    id="cb-${state.counter}"
                    class="checkbox"/>
                <label for="cb-${state.counter}">${taskInput.value}</label>
                <span class="delete-btn">X</span>
            </div>
        `
        newTask.querySelector('.checkbox').addEventListener('change', () => {
            let textDecoration = newTask.querySelector('label').style.textDecoration;
            if( textDecoration === 'line-through') {
                textDecoration = 'none';
            } else {
                textDecoration = 'line-through';
            }
        })
        newTask.querySelector('.delete-btn').addEventListener('click', (event) => {
            const toDelete = event.target.parentElement;
            toDelete.parentElement.removeChild(toDelete);                
        })
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert('You should input something before submitting!')
    }
}

