import { TaskModel } from "./models/task.model.js";
import { TaskController } from "./controllers/task.controllers.js";
import { TaskView } from "./views/task.view.js";
import { TodoView } from "./views/todo.view.js";
import { InprogressView } from "./views/inprogress.view.js";
import { DoneView } from "./views/done.view.js";
import { ModalUpdateView } from "./views/modal.update.view.js";

function main() {
  let taskModel = new TaskModel();
  let taskController = new TaskController(taskModel);
  let taskView = new TaskView(taskController);
  let modalUpdateView = new ModalUpdateView(taskController);
  let todoView = new TodoView(taskController, taskView, modalUpdateView, modalUpdateView);
  let inprogressView = new InprogressView(taskController, taskView, modalUpdateView);
  let doneView = new DoneView(taskController, taskView, modalUpdateView);

}

main();
