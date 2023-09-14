import { MenuModel } from '../models/menu.model.js';
import { CartModel } from '../models/cart.model.js'
import { MenuController } from '../controllers/menu.controller.js';
import { CartController } from '../controllers/cart.controller.js';
import { MenuView } from '../views/menu.view.js';
import { CartView } from '../views/cart.view.js';

function main() {
  let menuModel = new MenuModel();
  let cartModel = new CartModel();
  let menuController = new MenuController(menuModel);
  let cartController = new CartController(cartModel);
  let menuView = new MenuView(menuController);
  let cartView = new CartView(cartController);
}

main();
