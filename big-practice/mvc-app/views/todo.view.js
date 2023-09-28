import Observer from './observer.js';

class TodoView extends Observer {
  constructor(taskController, taskView, modalUpdateView) {
    super();
    this.taskController = taskController;
    this.taskView = taskView;
    this.modalUpdateView = modalUpdateView;

    // Render Todo Tasks
    this.render(this.taskController.taskModel.tasks.todos);

    // Show pop-up screen
    this.btnAddTodo = document.querySelector('.btn-add-todo');
    this.btnAddTodo.addEventListener('click', (e) => { this.openModal(e); });

    // Hidden pop-up screen
    this.modalContainer = document.querySelector('.modal-update-wrapper');
    this.modalContainer.addEventListener('click', (e) => { this.hideModal(e); });

    // Add TodoView to Observers array
    this.taskController.taskModel.addObserver(this);
  }

  render(data) {
    const todoList = document.querySelector('.todo-list');
    for (let index = 0; index < data.length; index++) {
      let itemData = data[index];
      let listItem = todoList.appendChild(this.taskView.renderTask(itemData));
      listItem.addEventListener('click', (e) => {
        // this.taskController.taskModel.getItem();
        this.openModal(e);
        this.modalUpdateView.renderModal();
      });
    }
  }

  openModal(e) {
    const updateModal = document.querySelector('.modal-update-wrapper');
    updateModal.classList.add('show');
    const dataId = e.target.getAttribute('data-id');
    const dataStatus = e.target.getAttribute('data-status');
    const listItem = this.taskController.taskModel.getItem(dataId, dataStatus);
    console.log(listItem);
    this.modalUpdateView.renderModal(listItem);
    const status = document.querySelector('.status-inprogress');
    const bigStatus = document.querySelector('.status');
    console.log(bigStatus);
    status.setAttribute('selected', '');
  }

  hideModal(e) {
    const updateModal = document.querySelector('.modal-update-wrapper');
    const btnClose = document.querySelector('.btn-close');
    if (e.target == updateModal || e.target == btnClose) {
      updateModal.classList.remove('show');
      // console.log(e.target);
    }
  }

  update() { }
}

export { TodoView };
