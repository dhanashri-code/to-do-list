// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const darkModeToggle = document.getElementById("darkModeToggle");

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
darkModeToggle.addEventListener("click", toggleDarkMode);

// Add a task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <span class="task-name">${taskText}</span>
    <div class="task-actions">
      <i class='fa fa-edit' onclick="editTask(this)" title="Edit">edit</i>
      <i class="fa fa-check" onclick="markTaskComplete(this)" title="Complete">✔</i>
      <i class="fa fa-trash" onclick="deleteTask(this)" title="Delete">delete</i>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

// Mark task as complete
function markTaskComplete(element) {
  const taskItem = element.parentElement.parentElement;
  taskItem.classList.toggle("completed");
}

// Delete a task
function deleteTask(element) {
  const taskItem = element.parentElement.parentElement;
  taskList.removeChild(taskItem);
}

// Edit a task
function editTask(element) {
  const taskItem = element.parentElement.parentElement;
  const taskName = taskItem.querySelector(".task-name");
  const newTaskText = prompt("Edit your task:", taskName.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskName.textContent = newTaskText.trim();
  }
}

// Toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Change button text/icon
  if (isDarkMode) {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }
}
``

