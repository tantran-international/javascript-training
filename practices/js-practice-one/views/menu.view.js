import Observer from './observer';

class MenuView extends Observer {
  constructor() {
    super();
    this.menuList = document.querySelector('.table-menu');
  }

  update() {}
}

export { MenuView };