import Observer from "./observer.js";

class CartView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.cartModel.addObserver(this);

    this.render(this.controller.cartModel.cartList);
  }

  render(data) {
    this.cartList = document.querySelector('.table-cart');
    this.generateTableBody(this.cartList, data);
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

  generateTableBody(table, data) {
    for (const element of data) {
      let row = table.insertRow();
      for (const key in element) {
        if (key == 'name' || key == 'amount') {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
  }

  update(data) {
    // Remove thead and tbody node
    // console.log(this.cartList.lastElementChild);
    this.cartList.removeChild(this.cartList.firstElementChild);
    // this.cartList.splice(1, 1);


    // console.log(this.cartList.lastElementChild);
    // Re-render Thead and Tbody
    this.render(data);
  }
}

export { CartView };
