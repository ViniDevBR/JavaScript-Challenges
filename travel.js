const name = prompt('Ola, como você se chama?')
const traveled = confirm('Você ja visitou alguma cidade?')

let awnsers = []
let contagem = 0

while (traveled == true) {
  awnsers.push(prompt('Qual o nome da cidade?'))
  contagem++
  const anotherCity = confirm('Você ja visitou outra cidade?')
  if (anotherCity != true) {
    break
  }
}
for (let i = 0; i < awnsers.length; i++) {
  alert(`Voce ja visitou ${contagem} cidades, sendo elas:
          ${awnsers[i]}`)
}
