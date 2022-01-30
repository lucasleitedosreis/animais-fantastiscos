//ao clicar nas opções do menu deixa a rolagem suave
import initScrollSuave from "./modules/Scroll-suave.js";
initScrollSuave();

//===========================================================
//animação do scroll //faz as sections aparecer ao usar scroll
import AnimaScroll from "./modules/animaScroll.js";
const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

//===========================================================
//Classe
//ao clicar nas imagens faz a animação no texto
import TabNavAnimais from "./modules/tabNavAnimais.js";
const tabNavAnimais = new TabNavAnimais(
  '[data-tab="menu"] li',
  '[data-tab="content-animais"] section',
);
tabNavAnimais.init();

//===========================================================
//mostra e oculta as descrições dos itens
import initAccordion from "./modules/accordionList.js";
initAccordion();

//===========================================================
//abre e fecha uma caixa de login
import Modal from "./modules/modal.js";
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

//===========================================================
//mostra uma mensagem ao passar o mouse
import Tooltip from "./modules/tooltip.js";
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

//===========================================================
//abre um submenu ao passar o mouse o clicar 'sobre'
import DropDownMenu from "./modules/dropDownMenu.js";
const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

//===========================================================
//menu mobile
import MenuMobile from "./modules/menuMobile.js";
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

//===========================================================
//Horário de funcionamento
import HorarioFunc from "./modules/horarioFunc.js";
const horarioFunc = new HorarioFunc("[data-semana]", "aberto");
horarioFunc.init();

//===========================================================
//Importa nome e quantidade de animais através do fetch
import fetchAnimais from "./modules/fetchAnimais.js";
fetchAnimais("/animaisApi.json", ".numeros-grid");

//===========================================================
//Mostra um valor em Bitcoin para doação
import fetchBitcoin from "./modules/fetchBitcoin.js";
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

//===========================================================
import SlideNav from "./modules/slide.js";
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
