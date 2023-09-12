import Observer from './observer.js';

class MenuView extends Observer {
  constructor() {
    super();
    this.menuList = document.querySelector('.table-menu');
  }

  update() {

  }
}

export { MenuView };