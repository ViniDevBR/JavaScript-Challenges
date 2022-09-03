//WITH NODE.JS
const questions = [
  'Digite seu nome completo',
  'O que voce estuda?',
  'Quantos anos voce tem?'
]

const ask = (index = 0) => {
  return process.stdout.write('\n' + questions[index] + '\n')
}

ask()
const respostas = []

process.stdin.on('data', data => {
  respostas.push(data.toString().trim())
  if (respostas.length < questions.length) {
    ask(respostas.length)
  } else {
    process.stdout.write('\n' + 'Cadastro realizado' + '\n')
    process.exit()
  }
})
process.on('exit', () => {
  console.log(`
  Ola ${respostas[0]} 
  fico feliz em saber que voce estuda ${respostas[1]}. 
  voce tem ${respostas[2]} anos`)
})

//WITH BROWSER
alert('Iniciando cadastro')
const firstName = prompt('Digite seu primeiro nome')
const secondName =  prompt('Digite seu segundo nome')
const study =  prompt('Digite seu campo de estudo')
const age =  prompt('Digite seu ano de nascimento')

confirm(`Nome completo: ${firstName} ${secondName}.
Area de estudo: ${study}.
Idade: ${2022 - age}`)

alert('Cadastro realizado')
const id = document.querySelector('#info')
      
id.innerHTML = ` Ola ${firstName} ${secondName} fico feliz em saber que voce estuda ${study}. voce tem ${2022 - Number(age)} anos`
