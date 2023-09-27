import Observer from './observer.js';
import trash from '../../assets/images/trash.svg';

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
          <div>
          <h3>${data.title}</h3>
          <p>${data.createAt}</p>
          <button class="btn-trash" type="button" alt="delete-button">
          <img src="${trash}">
          </button>
          </div>
          `;
    return li;
  }
}

export { TaskView };
