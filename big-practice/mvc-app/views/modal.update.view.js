import Observer from './observer.js';

class ModalUpdateView extends Observer {
  constructor(taskController) {
    super();
    this.taskController = taskController;

    this.taskController.taskModel.addObserver(this);
  }

  renderModal(data) {
    const inputTitle = document.querySelector('.input-title');
    if (data) {
      // inputTitle.setAttribute('value', data.title);
      inputTitle.value = data.title;

    }
  }
}

export { ModalUpdateView };
