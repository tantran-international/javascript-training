// define form && table body
let tasks = [];
const pomodoroForm = document.querySelector('.js-add-task');
const pomodoroTableBody = document.querySelector('.js-task-table-body');

const addTask = function(e) {
  e.preventDefault();

  // extract form's value
  const taskName = this.querySelector('.js-task-name').value;
  const pomodoroCount = this.querySelector('.js-pomodoro-count').value;

	// Reset form field
	this.reset();

  // Create a new task by updating the global state
  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false
  });

  // Render the global state
  renderTasks(pomodoroTableBody, tasks);
};

pomodoroForm.addEventListener('submit', addTask);

// -->
const renderTasks = function(tBodyNode, tasks = []) {
  tBodyNode.innerHTML = tasks.map((task, id) =>
  `<tr>
      <td class="cell-task-name">${task.taskName}</td>
      <td class="cell-pom-count">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</td>
      <td class="cell-pom-controls">
      ${task.finished ? 'Finished' :
					`<button class="js-task-done" data-id="${id}">Done</button>
      		<button class="js-increase-pomodoro" data-id="${id}">Increase Pomodoro Count</button>`
				}
          <button class="js-delete-task" data-id="${id}">Delete Task</button>
      </td>
  </tr>`).join('');
};

// Implement event handlers
const finishTask = ( tasks, taskId ) => {
	tasks[ taskId ].finished = true;
}

const increasePomodoroDone = ( tasks, taskId ) => {
	tasks[ taskId ].pomodoroDone += 1;
}

const deleteTask = ( tasks, taskId ) => {
	tasks.splice( taskId, 1 );
}

const handleTaskButtonClick = function(e) {
	const classList = e.target.className;
	const taskId = e.target.getAttribute('data-id');

	e.target.matches('.js-task-done') ? finishTask(tasks, taskId) :
	e.target.matches('.js-increase-pomodoro') ? increasePomodoroDone(tasks, taskId) :
	e.target.matches('.js-delete-task') ? deleteTask(tasks, taskId) : null;

	renderTasks(pomodoroTableBody, tasks);
};

pomodoroTableBody.addEventListener('click', handleTaskButtonClick);
