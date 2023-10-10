import Observer from './observer.js';
import trashIcon from '../../assets/images/trash.svg';

class TaskView extends Observer {
  constructor(taskController) {
    super();
    this.taskController = taskController;

    this.taskController.taskModel.addObserver(this);
  }

  // Render a single Task
  renderTask(data) {
    const li = document.createElement('li');
    li.innerHTML = `
          <div class="task" data-id="${data.id}" data-status="${data.status}s">
          <h3>${data.title}</h3>
          <p class="create-time"></p>
          <p class="update-time"></p>
          <button class="btn-trash" type="button" alt="delete-button">
          <img class="img-trash" src="${trashIcon}">
          </button>
          </div>
          `;
    return li;
    // <p>Create at: ${date.getHours()}:${date.getMinutes()} (${date.toDateString()})</p>
    // <p>Update at: ${date.getHours()}:${date.getMinutes()} (${date.toDateString()})</p>
  }
}

export { TaskView };
