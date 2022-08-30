const car1 = prompt('Digite o nome do primeiro carro')
const velo1 = Number(prompt('Digite a velocidade do primeiro carro'))

const car2 = prompt('Digite o nome do segundo carro')
const velo2 = Number(prompt('Digite a velocidade do segundo carro'))
const result = document.querySelector('#result')

result.innerHTML = velo1 > velo2 ? `O ${car1} é mais rapido` : `O ${car2} é mais rapido`
