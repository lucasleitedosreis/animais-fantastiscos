import outSideClick from "./outsideClicou.js";
export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.openMenu = this.openMenu.bind(this);
    //define o touchstart e o click como argumento padrão
    //de events caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
  }

  openMenu() {
    this.menuButton.classList.add("active");
    this.menuList.classList.add("active");
    outSideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove("active");
      this.menuList.classList.remove("active");
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
