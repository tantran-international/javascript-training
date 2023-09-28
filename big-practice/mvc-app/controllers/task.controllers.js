class TaskController {
  constructor(taskModel) {
    this.taskModel = taskModel;
  }


  openModal(e) {
    // const updateModal = document.querySelector('.modal-update-wrapper');
    // updateModal.classList.add('show');
    // // const dataId = e.target.getAttribute('data-id');
    // // const dataStatus = e.target.getAttribute('data-status');
    // // const listItem = this.taskModel.getItem(dataId, dataStatus);
    // console.log(e);
  }

  hideModal(e) {
    // const updateModal = document.querySelector('.modal-update-wrapper');
    // const btnClose = document.querySelector('.btn-close');
    // if (e.target == updateModal || e.target == btnClose) {
    //   updateModal.classList.remove('show');
    // }
  }
}




export { TaskController };
