/* Pegar informações do usuario via prompt */

alert('Iniciando cadastro')

const firstName = prompt('Digite seu primeiro nome')
const secondName =  prompt('Digite seu segundo nome')
const study =  prompt('Digite seu campo de estudo')
const age =  Number(prompt('Digite seu ano de nascimento'))
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

confirm(
`Nome completo: ${firstName} ${secondName}.
Area de estudo: ${study}.
Idade: ${anoAtual - age}`)

alert('Cadastro realizado')
id.innerHTML = ` Ola ${firstName} ${secondName} fico feliz em saber que você estuda ${study}. voce tem ${anoAtual - age} anos`
