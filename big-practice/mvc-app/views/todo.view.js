import Observer from './observer.js';

class TodoView extends Observer {
  constructor(taskController, taskView) {
    super();
    this.taskController = taskController;
    this.taskView = taskView;

    // Render Todo Tasks
    this.render(this.taskController.taskModel.tasks.todos);

    this.btnAddTodo = document.querySelector('.btn-add-todo');
    this.btnAddTodo.addEventListener('click', () => { console.log('Test-Add-Todo') });

    // Add TodoView to Observers array
    this.taskController.taskModel.addObserver(this);
  }

  render(data) {
    const todoList = document.querySelector('.todo-list');
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      todoList.appendChild(this.taskView.renderTask(item));
    }
  }

  update() { }
}

export { TodoView };
