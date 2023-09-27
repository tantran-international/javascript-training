import Observer from './observer.js';

class DoneView extends Observer {
  constructor(taskController, taskView) {
    super();
    this.taskController = taskController;
    this.taskView = taskView;

    // Render Dones Tasks
    this.render(this.taskController.taskModel.tasks.dones);

    this.btnAddTodo = document.querySelector('.btn-add-done');
    this.btnAddTodo.addEventListener('click', () => { console.log('Test-Add-Done') });

    // Add DoneView to Observers array
    this.taskController.taskModel.addObserver(this);
  }

  render(data) {
    const todoList = document.querySelector('.done-list');
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      todoList.appendChild(this.taskView.renderTask(item));
    }
  }

  update() { }
}

export { DoneView };
