// define form && table body
let tasks = [];
const poromodoForm = document.querySelector('js-add-task');
const poromodoTableBody = document.querySelector('js-task-table-body');

const addTask = (e) => {
  e.prevenDefault();

  // extract form's value
  const taskName = this.querySelector('js-task-name').value;
  const poromodoCounter = this.querySelector('js-pomodoro-count').value;

  // Create a new task by updating the global state
  tasks.push({
    taskName,
    poromodoDone: 0,
    poromodoCounter,
    finished: false
  });

  // Reset form field
  this.reset();

  // Render the global state
  renderTasks(poromodoTableBody, tasks);
};

const renderTasks = (tBodyNode, tasks = []) => {
  tBodyNode.innerHTML = tasks.map((task, id) => 
  `<tr>
      <td class="cell-task-name">${task.taskName}</td>
      <td class="cell-pom-count">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</td>
      <td class="cell-pom-controls">
      ${task.finished ? 'Finished' : `
          <button class="js-task-done" data-id="${id}">Done</button>
          <button class="js-increase-pomodoro" data-id="${id}">Increase Pomodoro Count</button>`
    }
          <button class="js-delete-task" data-id="${id}">Delete Task</button>
      </td>
  </tr>`).join('');
};

poromodoForm.addEventListener('submit', addTask);
