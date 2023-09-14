import Observer from "./observer.js";

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.cartList = document.querySelector('.table-cart');
    this.generateTableHead(this.cartList);
  }

  generateTableHead(table) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const th = document.createElement('th');
    th.innerText = 'Menu';
    row.appendChild(th);
    th.setAttribute('colspan', 3);
  }

  update() {}
}

export { CartView };
