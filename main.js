/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/Scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/Scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]',\r\n  );\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  }\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/Scroll-suave.js?");

/***/ }),

/***/ "./js/modules/accordionList.js":
/*!*************************************!*\
  !*** ./js/modules/accordionList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n  const accordionFaq = document.querySelectorAll('[data-lista=\"accordion\"] dt');\r\n  const activeClass = \"ativo\";\r\n\r\n  function activeAccordion() {\r\n    this.classList.toggle(\"ativo\");\r\n    this.nextElementSibling.classList.toggle(\"ativo\");\r\n  }\r\n  if (accordionFaq.length) {\r\n    accordionFaq[0].classList.add(activeClass);\r\n    accordionFaq[0].nextElementSibling.classList.add(activeClass);\r\n\r\n    accordionFaq.forEach((item) => {\r\n      item.addEventListener(\"click\", activeAccordion);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordionList.js?");

/***/ }),

/***/ "./js/modules/animaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/animaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observerTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observerTarget = document.querySelector(observerTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    //bind o this do objeto ao callback da mutação\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start = start + incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) => {\r\n      this.constructor.incrementarNumero(numero);\r\n    });\r\n  }\r\n\r\n  //função que ocorre quando a mutação acontecer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  //adiciona o mutttionObserver para verificar\r\n  //quando a classe ativo é adicionado ao elemento target\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observerTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animaNumeros.js?");

/***/ }),

/***/ "./js/modules/animaScroll.js":
/*!***********************************!*\
  !*** ./js/modules/animaScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaScroll)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\nclass AnimaScroll {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowMetade = window.innerHeight * 0.6;\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\r\n  }\r\n  /*\r\n  animaScroll() {\r\n    this.sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - this.windowMetade < 0;\r\n      if (isSectionVisible) {\r\n        section.classList.add(\"ativo\");\r\n      } else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n  */\r\n\r\n  //pega a distância de cada item em relação ao topo do site\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      };\r\n    });\r\n  }\r\n\r\n  //verifica a distância em cada objeto\r\n  //em relação ao scroll\r\n  checkDistance() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add(\"ativo\");\r\n      } else if (item.element.classList.contains(\"ativo\")) {\r\n        item.element.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener(\"scroll\", this.checkDistance);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animaScroll.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n    }\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropDownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropDownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClicou_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClicou.js */ \"./js/modules/outsideClicou.js\");\n\r\n\r\nclass DropDownMenu {\r\n  constructor(dropDownMenu, events) {\r\n    this.dropDownMenu = document.querySelectorAll(dropDownMenu);\r\n\r\n    //define o touchstart e o click como argumento padrão\r\n    //de events caso o usuário não defina\r\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];\r\n    else this.events = events;\r\n\r\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\r\n  }\r\n\r\n  //ativa o dropdownMenu e adiciona a função\r\n  //que observa o clique fora dele\r\n  activeDropdownMenu(event) {\r\n    event.preventDefault(); //previne o padrão do clique\r\n\r\n    const element = event.currentTarget;\r\n    element.classList.add(\"active\"); //adiciona a classe ativo\r\n    (0,_outsideClicou_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      //remove a classe ativo\r\n      element.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  //adiciona os eventos ao dropdownMenu\r\n  addDropdownMenuEvent() {\r\n    this.dropDownMenu.forEach((menu) => {\r\n      this.events.forEach((userEvent) => {\r\n        //um array sobre os eventos de click e touch\r\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\r\n      });\r\n    });\r\n  }\r\n  init() {\r\n    if (this.dropDownMenu.length) {\r\n      this.addDropdownMenuEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropDownMenu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/modules/animaNumeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  //cria a div contendo informações com o total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  //preenche cada animal no Dom\r\n  const numerosGrid = document.querySelector(target);\r\n  function preencherAnimal(animal) {\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n  //anima os números de cada animal\r\n  function animaNumerosAnimais() {\r\n    const animaNumeros = new _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"ativo\");\r\n    animaNumeros.init();\r\n  }\r\n\r\n  //puxa os animais através de um arquivo json\r\n  //e cria cada animal utilizando createAnimal\r\n  async function criarAnimais() {\r\n    try {\r\n      //fetch, espera resposta e transforma a resposta em json\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJson = await animaisResponse.json();\r\n      //após a transformação de json, ativa as funçoes\r\n      //para preencher a animar os números\r\n      animaisJson.forEach((animal) => preencherAnimal(animal));\r\n      animaNumerosAnimais();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\n  fetch(url)\n    .then((r) => r.json())\n    .then((bitcoin) => {\n      const btcPreco = document.querySelector(target);\n      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n    })\n    .catch((erro) => {\n      console.log(Error(erro));\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./js/modules/horarioFunc.js":
/*!***********************************!*\
  !*** ./js/modules/horarioFunc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HorarioFunc)\n/* harmony export */ });\nclass HorarioFunc {\r\n  constructor(funcionamento, activeClass) {\r\n    this.funcionamento = document.querySelector(funcionamento);\r\n    this.activeClass = activeClass;\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.diasSemana = this.funcionamento.dataset.semana.split(\",\").map(Number);\r\n    this.horario = this.funcionamento.dataset.horario.split(\",\").map(Number);\r\n  }\r\n\r\n  dadosAgora() {\r\n    //Criar as datas de hoje\r\n    this.dataAgora = new Date();\r\n    //dia em numero da semana\r\n    this.diaHoje = this.dataAgora.getDay();\r\n    //horario do dia\r\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\r\n  }\r\n\r\n  estaAberto() {\r\n    //verifica se o dia atual da semana é igual ao dia que está aberto\r\n    //quando o indexOf não encontra o número ele retorna -1\r\n    const semanaAberto = this.diasSemana.indexOf(this.diaHoje) !== -1;\r\n    //Verifica se está no horário de funcionamento\r\n    const horarioAberto =\r\n      this.horarioAgora >= this.horario[0] &&\r\n      this.horarioAgora < this.horario[1];\r\n    return semanaAberto && horarioAberto;\r\n  }\r\n\r\n  ativaAberto() {\r\n    if (this.estaAberto) {\r\n      this.funcionamento.classList.add(this.activeClass);\r\n    }\r\n  }\r\n  init() {\r\n    if (this.funcionamento) {\r\n      this.dadosFuncionamento();\r\n      this.dadosAgora();\r\n      this.ativaAberto();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/horarioFunc.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClicou_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClicou.js */ \"./js/modules/outsideClicou.js\");\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.openMenu = this.openMenu.bind(this);\r\n    //define o touchstart e o click como argumento padrão\r\n    //de events caso o usuário não defina\r\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];\r\n    else this.events = events;\r\n  }\r\n\r\n  openMenu() {\r\n    this.menuButton.classList.add(\"active\");\r\n    this.menuList.classList.add(\"active\");\r\n    (0,_outsideClicou_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n      this.menuButton.classList.remove(\"active\");\r\n      this.menuList.classList.remove(\"active\");\r\n    });\r\n  }\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((evento) => {\r\n      this.menuButton.addEventListener(evento, this.openMenu);\r\n    });\r\n  }\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, container) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.container = document.querySelector(container);\r\n\r\n    //bind this ao callback para fazer referência\r\n    //ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueFora = this.cliqueFora.bind(this);\r\n  }\r\n  //abre ou fecha o modal\r\n  toggleModal() {\r\n    this.container.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  //adiciona o evento de toggle ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  //fecha o modal ao clicar do lado de fora\r\n  cliqueFora(event) {\r\n    if (event.target === this.container) {\r\n      this.toggleModal();\r\n    }\r\n  }\r\n\r\n  //adiciona os eventos aos elementos do modal\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.container.addEventListener(\"click\", this.cliqueFora);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.container) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClicou.js":
/*!*************************************!*\
  !*** ./js/modules/outsideClicou.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callback) {\n  const html = document.documentElement; //seleciona o documento html\n  const outside = 'data-outside';\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick) });\n    })\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      })\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClicou.js?");

/***/ }),

/***/ "./js/modules/tabNavAnimais.js":
/*!*************************************!*\
  !*** ./js/modules/tabNavAnimais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNavAnimais)\n/* harmony export */ });\nclass TabNavAnimais {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  activeTab(index) {\r\n    //A função pega o index das sections\r\n    this.tabContent.forEach((section) => {\r\n      //O forEach remove a classe ativo em cada section\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao); //adiciona classe quando receber o click\r\n  }\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index));\r\n    });\r\n  }\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabNavAnimais.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    //bind do objeto da classe aos callbacks\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  //move a tooltip com baseem seus estilos\r\n  //de acordo com posição do mouse\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 190 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - 190}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  //remove o tooltip e os eventos de mousemove e mouseleave\r\n  onMouseLeave(event) {\r\n    this.tooltipBox.remove();\r\n    event.currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    event.currentTarget.removeEventListener(\"mouseMove\", this.onMouseMove);\r\n  }\r\n\r\n  //cria a tooltipbox e coloca no body\r\n  criarToolltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  //cria a tooltipbox e adiciona os eventos de mousemove e\r\n  //mouseleave ao target\r\n  onMouseOver(event) {\r\n    this.criarToolltipBox(event.currentTarget);\r\n    event.currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n    event.currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n  }\r\n\r\n  //adicona os eventos de mouseover a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addTooltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Scroll-suave.js */ \"./js/modules/Scroll-suave.js\");\n/* harmony import */ var _modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animaScroll.js */ \"./js/modules/animaScroll.js\");\n/* harmony import */ var _modules_tabNavAnimais_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabNavAnimais.js */ \"./js/modules/tabNavAnimais.js\");\n/* harmony import */ var _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordionList.js */ \"./js/modules/accordionList.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./js/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_horarioFunc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/horarioFunc.js */ \"./js/modules/horarioFunc.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n//ao clicar nas opções do menu deixa a rolagem suave\r\n\r\n(0,_modules_Scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n//===========================================================\r\n//animação do scroll //faz as sections aparecer ao usar scroll\r\n\r\nconst animaScroll = new _modules_animaScroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"scroll\"]');\r\nanimaScroll.init();\r\n\r\n//===========================================================\r\n//Classe\r\n//ao clicar nas imagens faz a animação no texto\r\n\r\nconst tabNavAnimais = new _modules_tabNavAnimais_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  '[data-tab=\"menu\"] li',\r\n  '[data-tab=\"content-animais\"] section',\r\n);\r\ntabNavAnimais.init();\r\n\r\n//===========================================================\r\n//mostra e oculta as descrições dos itens\r\n\r\n(0,_modules_accordionList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n//===========================================================\r\n//abre e fecha uma caixa de login\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]',\r\n);\r\nmodal.init();\r\n\r\n//===========================================================\r\n//mostra uma mensagem ao passar o mouse\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-tooltip]\");\r\ntooltip.init();\r\n\r\n//===========================================================\r\n//abre um submenu ao passar o mouse o clicar 'sobre'\r\n\r\nconst dropDownMenu = new _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-dropdown]\");\r\ndropDownMenu.init();\r\n\r\n//===========================================================\r\n//menu mobile\r\n\r\nconst menuMobile = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\n//===========================================================\r\n//Horário de funcionamento\r\n\r\nconst horarioFunc = new _modules_horarioFunc_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"[data-semana]\", \"aberto\");\r\nhorarioFunc.init();\r\n\r\n//===========================================================\r\n//Importa nome e quantidade de animais através do fetch\r\n\r\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"/animaisApi.json\", \".numeros-grid\");\r\n\r\n//===========================================================\r\n//Mostra um valor em Bitcoin para doação\r\n\r\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;