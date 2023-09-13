import Observer from './observer.js';

class MenuView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.menuList = document.querySelector('.table-menu');
    this.generateTableBody(this.menuList, controller.model.menuList)
    this.generateTableHead(this.menuList);
    console.log(this.menuList);
 
  }

  generateTableHead(table) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const th = document.createElement('th');
    th.innerText = 'Menu';
    row.appendChild(th);
    th.setAttribute('colspan', 4);
  }

  generateTableBody(table, data) {
    for (const element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  update() {}
}

export { MenuView };
