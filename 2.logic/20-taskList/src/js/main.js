// Select HTML
const inputTask = document.querySelector(".input-task")
const button = document.querySelector(".btn-add-task")
const tasksList = document.querySelector(".tasks")

function getSavedTasks() {
  const tasks = localStorage.getItem('tasks')
  const tasksList = JSON.parse(tasks);
  console.log(tasksList)

  for (let task of tasksList) {
    createTask(task)
  }
}
getSavedTasks()

// Create LI PlaceHolder
function createLI() {
  const li = document.createElement('li');
  return li;
}

// Create Task Function
function createTask(textInput) {
  const li = createLI();
  li.innerHTML = textInput;
  tasksList.appendChild(li);
  deleteTaskButton(li);
  saveTasks()
}

// Delete Button
function deleteTaskButton(li) {
  li.innerText += ' ';
  const deleteButton = document.createElement("Button");
  deleteButton.innerText = 'Delete'
  deleteButton.setAttribute('class', 'delete') //Class on Button!
  li.appendChild(deleteButton);
}

// Clear Input Function
function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

// Save Tasks
function saveTasks(){
  const listOfTasks = tasksList.querySelectorAll('li')
  const tasksListArr = [];

  for (let task of listOfTasks) {
    taskText = task.innerText
    taskText = taskText.replace("Delete", "").trim()
    tasksListArr.push(taskText)
  }

  const tasksJSON = JSON.stringify(tasksListArr);
  localStorage.setItem('tasks', tasksJSON)
}

// Event Listener on Enter (if user use Enter, it will create a new task)
inputTask.addEventListener('keypress', function(e) {
  if (e.code === 'Enter') {
    if(inputTask.value){
    createTask(inputTask.value)
    clearInput();
    }
  }
  saveTasks()
});

// Event Listener on Click in Delete Button
document.addEventListener('click', function(e){
  const el = e.target;
  if (el.classList.contains('delete')) {
    el.parentElement.remove();  // Remove parent element (LI)
  }
  saveTasks()
});


// Event listener on Click
button.addEventListener('click', function(){
  if (!inputTask.value) return;
  createTask(inputTask.value);
  clearInput();
});


