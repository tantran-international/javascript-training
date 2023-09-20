import Observer from './observer.js';

class MenuView extends Observer {
  constructor(controller) {
    // super() method refer to Observer class, help MenuView class and access update() method of it's parent
    super();
    // Pass parameter "controller" to property name to access controller's properties and methods()
    this.controller = controller;
    // Render Menu's View
    this.render(this.controller.menuModel.menuList);

    this.controller.menuModel.addObserver(this);
  }

  render(data) {
    this.menuList = document.querySelector('.table-menu');
    // Create Table body first because:
    // The methods insertRow() takes care of creating a tBody only if it is called on an empty Table.
    this.generateTableBody(this.menuList, data);
    this.generateTableHead(this.menuList);
    // console.log methods below help me identify exactly objects in the DOM
    // console.log(this.menuList);
    // console.log(this.menuList.lastElementChild.children);
    this.generateButton(this.menuList.lastElementChild.children);
  }

  // Use DOM-appendChild to create table-Head in Table
  generateTableHead(table) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    const th = document.createElement('th');
    th.innerText = 'Menu';
    row.appendChild(th);
    th.setAttribute('colspan', 4);
  }

  // For each object in Array -> create table row for it. For each keyName in Object: create table data (insertCell) and display it's value
  generateTableBody(table, data) {
    for (const element of data) {
      let row = table.insertRow();
      for (let key in element) {
        if (key != 'id') {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
  }

  // Passed ***[HTML collection]: children of tBody: (lastElementChild of Table)*** into method and create button for each index in collection.
  // In conclusion: I use this method to create button for each row in Menu
  // Then add Event Listener for each button
  generateButton(tableRow) {
    for (let index = 0; index < tableRow.length; index++) {
      let button = document.createElement('button');
      button.textContent = 'Add to Cart';
      button.setAttribute('type', 'button');
      button.setAttribute('menuId', index);
      tableRow[index].appendChild(button);
      button.className = `menu-btn btn-${index}`;

      // Add listener for each button by define menuId attribute (in handleEvent method of controller)
      button.addEventListener('click', this.controller);
    }
  }

  // Update Menu View
  update(data) {
    // Remove thead and tbody node
    this.menuList.removeChild(this.menuList.firstElementChild);
    this.menuList.removeChild(this.menuList.lastElementChild);
    // Re-render Thead and Tbody
    this.render(data);
  }
}

// export class MenuView to import outside
export { MenuView };
