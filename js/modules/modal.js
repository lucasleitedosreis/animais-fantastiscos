export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.container = document.querySelector(container);

    //bind this ao callback para fazer referência
    //ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }
  //abre ou fecha o modal
  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  //adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar do lado de fora
  cliqueFora(event) {
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  //adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.cliqueFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.container) {
      this.addModalEvent();
    }
    return this;
  }
}
