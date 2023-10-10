import Observer from './observer.js';

class ModalUpdateView extends Observer {
  constructor(taskController) {
    super();
    this.taskController = taskController;

    this.taskController.taskModel.addObserver(this);

    // Add evenr for confirm button
    const confirmBtn = document.querySelector('.btn-confirm');
    confirmBtn.addEventListener('click', (e) => {
      this.taskController.addNewTask(e.target.parentNode);
    });

    // const updateBtn = document.querySelector('.btn-update');
    // updateBtn.addEventListener('click', (e) => {
    //   console.log(e.target.parentNode);
    //   this.taskController.addNewTask(e.target.parentNode);
    // });

  }

  renderModal(data) {
    const modalTitle = document.querySelector('.modal-update-title');
    const inputTitle = document.querySelector('.input-title');
    const createAt = document.querySelector('.create-at');
    const updateAt = document.querySelector('.update-at');

    function padTo2Digit(number) {
      if (number < 10) {
        number = "0" + number;
      }
      return number;
    }

    function getUpdateDate(date) {
      // return `${padTo2Digit(date.getHours())}:${padTo2Digit(date.getMinutes())} ${padTo2Digit(date.toDateString())}`;
      return padTo2Digit(date.getDate());
    }

    if (data) {
      modalTitle.innerText = 'Update Task';
      inputTitle.value = data.title;
      createAt.innerText = `Create at: ${data.createAt}`;
    } else {
      modalTitle.innerText = 'Add new Task';
      inputTitle.value = '';
      updateAt.innerText = '';
    }


  }
}

export { ModalUpdateView };
