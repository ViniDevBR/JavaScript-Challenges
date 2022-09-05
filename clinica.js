const pacientes = []
let menu = ''
do {
  let position = ''
  for(let i = 0; i < pacientes.length; i++){
    position += `${i+1}° - ${pacientes[i]} \n`
  }
  menu = prompt(`Bem vindo a clinica, segue abaixo lista de espera:
${position}
  Digite a opção desejada:
  1. Adicionar paciente
  2. Consultar paciente
  3. Sair`)

  switch(menu){
    case '1':
      const add = prompt('Qual o nome do paciente a ser adicionado?')
      pacientes.push(add)
        break
    case '2':
      const consulta = pacientes.shift()
      alert(`Primeiro da lista foi chamado. Paciente ${consulta}`)
        break
    case '3':
      alert('Muito obrigado pelo visita')
        break
    default:
      alert ('Opção invalida')
  }
} while (menu != '3');
