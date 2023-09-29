import Observer from './observer.js';

class InprogressView extends Observer {
  constructor(taskController, taskView, modalUpdateView) {
    super();
    this.taskController = taskController;
    this.taskView = taskView;
    this.modalUpdateView = modalUpdateView;

    // Render Inprogress Tasks
    this.render(this.taskController.taskModel.tasks);

    // Show pop-up screen
    this.imgAddInprogress = document.querySelector('.img-add-inprogress');
    this.imgAddInprogress.addEventListener('click', (e) => { this.openModal(e); });

    // Hidden pop-up screen
    this.modalContainer = document.querySelector('.modal-update-wrapper');
    this.modalContainer.addEventListener('click', (e) => { this.hideModal(e); });

    // Add event for trash btn
    // this.trashBtn = document.querySelectorAll('.img-trash');
    // for (let index = 0; index < this.trashBtn.length; index++) {
    //   const element = this.trashBtn[index];
    //   element.addEventListener('click', () => {
    //     console.log('deleted');
    //   });
    // }

    // const confirmBtn = document.querySelector('.btn-confirm');
    // confirmBtn.addEventListener('click', (e) => {
    //   this.taskController.addNewTask(e.target.parentNode);
    //   console.log(e.target.parentNode);
    // });

    // Add InprogressView to Observers array
    this.taskController.taskModel.addObserver(this);
  }

  render(data) {
    const inprogressList = document.querySelector('.inprogress-list');
    inprogressList.innerHTML = "";
    for (const key in data) {
      if (key == 'inprogresss') {
        let dataList = data[key];
        for (let index = 0; index < dataList.length; index++) {
          let itemData = dataList[index];
          let listItem = inprogressList.appendChild(this.taskView.renderTask(itemData));
          listItem.addEventListener('click', (e) => { this.openModal(e); });
        }
      }
    }
  }

  openModal(e) {
    // Conditions for display Modal
    const updateModal = document.querySelector('.modal-update-wrapper');
    const tasks = document.querySelectorAll('.task');
    for (let index = 0; index < tasks.length; index++) {
      const element = tasks[index];
      if (e.target == tasks[index] || e.target == this.imgAddInprogress) {
        updateModal.classList.add('show');
      }
    }

    // Conditions for render Modal
    const dataId = e.target.getAttribute('data-id');
    const dataStatus = e.target.getAttribute('data-status');
    const listItem = this.taskController.taskModel.getItem(dataId, dataStatus);
    const status = document.querySelector('.status');
    // const trashBtn = document.querySelectorAll('.img-trash');

    if (e.target != this.imgAddInprogress) {
      this.modalUpdateView.renderModal(listItem);
      status.value = listItem.status;
    } else {
      this.modalUpdateView.renderModal();
      status.value = "";
    }
  }

  hideModal(e) {
    const updateModal = document.querySelector('.modal-update-wrapper');
    const btnClose = document.querySelector('.btn-close');
    if (e.target == updateModal || e.target == btnClose) {
      updateModal.classList.remove('show');
      // console.log(e.target);
    }
  }

  update(data) {
    this.render(data);
  }
}

export { InprogressView };
