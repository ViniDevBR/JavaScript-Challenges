let money = Number(prompt('Qts reais vc tem?'))
let menu
do {
  menu = prompt(`
  SALDO R$ ${money}
  MENU DE OPÇÕES:
  1. ADICIONAR 
  2. REMOVER
  3. ENCERRAR`)

  switch (menu) {
    case '1':
      const add = Number(prompt('Qual o valor voce deseja somar?'))
      money += add
        break
    case '2':
      const sub = Number(prompt('Qual o valor voce deseja somar?'))
      money -= sub
        break
    case '3':
      alert(`Encerrando`)
        break
    default:
      alert('Opção Invalida')
  }
} while (menu !== '3')
