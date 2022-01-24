import outSideClick from "./outsideClicou.js";

export default class DropDownMenu {
  constructor(dropDownMenu, events) {
    this.dropDownMenu = document.querySelectorAll(dropDownMenu);

    //define o touchstart e o click como argumento padrão
    //de events caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdownMenu e adiciona a função
  //que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault(); //previne o padrão do clique

    const element = event.currentTarget;
    element.classList.add("active"); //adiciona a classe ativo
    outSideClick(element, this.events, () => {
      //remove a classe ativo
      element.classList.remove("active");
    });
  }

  //adiciona os eventos ao dropdownMenu
  addDropdownMenuEvent() {
    this.dropDownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        //um array sobre os eventos de click e touch
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  init() {
    if (this.dropDownMenu.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
