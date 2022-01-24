export default class HorarioFunc {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horario = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    //Criar as datas de hoje
    this.dataAgora = new Date();
    //dia em numero da semana
    this.diaHoje = this.dataAgora.getDay();
    //horario do dia
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    //verifica se o dia atual da semana é igual ao dia que está aberto
    //quando o indexOf não encontra o número ele retorna -1
    const semanaAberto = this.diasSemana.indexOf(this.diaHoje) !== -1;
    //Verifica se está no horário de funcionamento
    const horarioAberto =
      this.horarioAgora >= this.horario[0] &&
      this.horarioAgora < this.horario[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
