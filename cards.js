const cards = []
let menu = ''
do {
  let position = ''
  for(let i = 0; i < cards.length; i++){
    position += `${(i + 1)}° - ${cards[i]} \n`
  }
  menu = prompt(`Menu de cartas. Abaixo contens as cartas presentes no baralho:
${position}
  
  1. Adicionar carta
  2. Puxar carta
  3. Sair`)

  switch(menu){
    case '1':
      const add = prompt('Qual o nome da carta?')
      cards.unshift(add)
        break
    case '2':
      const pull = cards.shift()
      alert(`a carta ${pull} foi removida do topo`)
        break
    case '3':
      alert('Muito obrigado, tchau!')
        break
    default:
      alert('Opção invalida')
  }
} while (menu != '3');
