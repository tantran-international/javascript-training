import { TaskModel } from "./models/task.model.js";
import { TaskController } from "./controllers/task.controller.js";
import { TaskView } from "./views/task.view.js";
import { TodoView } from "./views/todo.view.js";
import { InprogressView } from "./views/inprogress.view.js";
import { DoneView } from "./views/done.view.js";

function main() {
  let taskModel = new TaskModel();
  let taskController = new TaskController(taskModel);
  let taskView = new TaskView(taskController);
  let todoView = new TodoView(taskController, taskView);
  let inprogressView = new InprogressView(taskController, taskView);
  let doneView = new DoneView(taskController, taskView);
}

main();
