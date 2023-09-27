import Observer from './observer.js';

class InprogressView extends Observer {
  constructor(taskController, taskView) {
    super();
    this.taskController = taskController;
    this.taskView = taskView;

    // Render Inprogress Tasks
    this.render(this.taskController.taskModel.tasks.inprogress);

    this.btnAddTodo = document.querySelector('.btn-add-inprogress');
    this.btnAddTodo.addEventListener('click', () => { console.log('Test-Add-Inprogress') });

    // Add InprogressView to Observers array
    this.taskController.taskModel.addObserver(this);
  }

  render(data) {
    const todoList = document.querySelector('.inprogress-list');
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      todoList.appendChild(this.taskView.renderTask(item));
    }
  }

  update() { }
}

export { InprogressView };
