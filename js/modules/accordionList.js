export default function initAccordion() {
  const accordionFaq = document.querySelectorAll('[data-lista="accordion"] dt');
  const activeClass = "ativo";

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }
  if (accordionFaq.length) {
    accordionFaq[0].classList.add(activeClass);
    accordionFaq[0].nextElementSibling.classList.add(activeClass);

    accordionFaq.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
