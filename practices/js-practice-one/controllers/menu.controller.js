class MenuController {
  constructor(model) {
  // Pass parameter "model" to property name to access model's properties in constructor() method
  // MenuView can access model.menuList via this"controller".model.menuList
    this.model = model;
  }
}

export { MenuController };