import { ColumnModel } from './models/column.model';
import { ColumnController } from './controllers/column.controllers';
import { ColumnView } from './views/column.view.js';
import { ConfirmModalView } from './views/confirm.modal.view.js';
import { EditModalView } from './views/edit.modal.view.js';

function main() {
  let columnModel = new ColumnModel();
  let columnController = new ColumnController(columnModel);

  // Column's Views
  let todoView = new ColumnView(columnController, 'todo');
  let inprogressView = new ColumnView(columnController, 'inprogress');
  let doneView = new ColumnView(columnController, 'done');

  // Modal's Views
	let confirmModalView = new ConfirmModalView(columnController);
	let editModalView = new EditModalView(columnController);

  // Render current tasks from Local Storage when load page
  window.addEventListener('load', async () => {
		columnController.readData();
  });
}

main();
