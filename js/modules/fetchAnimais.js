import AnimaNumeros from "./animaNumeros.js";

export default function fetchAnimais(url, target) {
  //cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //preenche cada animal no Dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima os números de cada animal
  function animaNumerosAnimais() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //puxa os animais através de um arquivo json
  //e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      //fetch, espera resposta e transforma a resposta em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      //após a transformação de json, ativa as funçoes
      //para preencher a animar os números
      animaisJson.forEach((animal) => preencherAnimal(animal));
      animaNumerosAnimais();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
