const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', handleAddTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleAddTask();
});

function handleAddTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggle complete
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}
