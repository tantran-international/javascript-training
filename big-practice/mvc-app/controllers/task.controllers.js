class TaskController {
  constructor(taskModel) {
    this.taskModel = taskModel;
  }

  addNewTask(modal) {
    const inputTitle = modal.querySelector('.input-title');
    const createAt = modal.querySelector('.create-at');
    const updateAt = modal.querySelector('.update-at');
    const status = modal.querySelector('.status');
    // console.log(inputTitle.value);
    // console.log(createAt.textContent);
    // console.log(updateAt.textContent);
    // console.log(status.value);
    this.taskModel.addItem(inputTitle, createAt, updateAt, status);
  }

  updateNewTask(modal) {
    console.log('updated');
  }
}




export { TaskController };
