// define form && table body
let tasks = [];
const pomodoroForm = document.querySelector('.js-add-task');
const pomodoroTableBody = document.querySelector('.js-task-table-body');

// Function add new Tasks to Table-Body
const addTask = function(e) {
  e.preventDefault();

  // extract form's value
  const taskName = this.querySelector('.js-task-name').value;
  const pomodoroCount = this.querySelector('.js-pomodoro-count').value;

	// Reset form field
	this.reset();

  // Create a new task (create new object for array)
  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false
  });

  // Render the global state (Render layout)
  renderTasks(pomodoroTableBody, tasks);
};

pomodoroForm.addEventListener('submit', addTask);

// Render new Task's layout
const renderTasks = (tBodyNode, tasks = []) => {
  tBodyNode.innerHTML = tasks.map((currentTask, index) =>
  `<tr>
      <td class="cell-task-name">${currentTask.taskName}</td>
      <td class="cell-pom-count">${currentTask.pomodoroDone} / ${currentTask.pomodoroCount} pomodori</td>
      <td class="cell-pom-controls">
      ${currentTask.finished ? 'Finished' :
					`<button class="js-task-done" data-id="${index}">Done</button>
      		<button class="js-increase-pomodoro" data-id="${index}">Increase Pomodoro Count</button>`
				}
          <button class="js-delete-task" data-id="${index}">Delete Task</button>
      </td>
  </tr>`).join('');
};

// Implement event handlers
const finishTask = (tasksArray, taskId) => {
	tasksArray[taskId].finished = true;

	// Define the which type of the input parameter (Code Analysis)
	console.log(taskId);
	console.log(tasksArray);
	console.log(tasksArray[taskId]);
}

// Implement event handlers
const increasePomodoroDone = (tasksArray, taskId) => {
	const limit = tasksArray[taskId].pomodoroCount;
	if(tasksArray[taskId].pomodoroDone < limit) {
		tasksArray[taskId].pomodoroDone += 1;
		console.log(taskId);
	}
}

// Implement event handlers
const deleteTask = (tasksArray, taskId) => {
	tasksArray.splice(taskId, 1);
	console.log(taskId);
}

/* Implement Big event to rule them all, One event handler to rule them all. When a click on a DOM node happens and an event handler is not defined on the node,
the event handler defined on the closest parent node captures and handles the event.
-> To handle event propagation without adding event listeners at runtime, I define Event for Table-Body-Node because it contains the buttons*/
const handleTaskButtonClick = function(e) {
	const taskId = e.target.getAttribute('data-id');

	e.target.matches('.js-task-done') ? finishTask(tasks, taskId) :
	e.target.matches('.js-increase-pomodoro') ? increasePomodoroDone(tasks, taskId) :
	e.target.matches('.js-delete-task') ? deleteTask(tasks, taskId) : null;

	renderTasks(pomodoroTableBody, tasks);
};

pomodoroTableBody.addEventListener('click', handleTaskButtonClick);
