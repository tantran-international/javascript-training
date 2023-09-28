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
          <div data-id="${data.id}" data-status="${data.status}s">
          <h3>${data.title}</h3>
          <p>${data.createAt}</p>
          <button class="btn-trash" type="button" alt="delete-button">
          <img class="img-trash" src="${trashIcon}">
          </button>
          </div>
          `;
          // li.setAttribute('data-id', data.id);
    return li;
  }
}

export { TaskView };
