import { MenuModel } from '../models/menu.model.js';
import { MenuController } from '../controllers/menu.controller.js';
import { MenuView } from '../views/menu.view.js';

function main() {
  let menuModel = new MenuModel();
  let menuController = new MenuController(menuModel);
  let menuView = new MenuView(menuController);
}

main();
