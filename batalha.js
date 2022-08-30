const Atacante = prompt('Atacante')
const power1 = Number(prompt('poder'))
      
const Defensor = prompt('Defensor')
const defense = Number(prompt('qtd de defesa'))
const shield = confirm('possui escudo?')
let life = Number(prompt('qtd de vida'))
let damage = 0

      if (power1 > defense && shield == false) {
        damage = power1 - defense
      } else if (power1 > defense && shield == true) {
        damage = (power1 - defense) / 2
      }
      life -= damage

      alert(`${Atacante} casou ${power1} de dano em ${Defensor}`)
      alert(`${Atacante}
      Poder de ataque: ${power1}
      
${Defensor}
      Quantidade de vida: ${life}
      Quantidade de defesa: ${defense}
      Possui escudo: ${shield}`) 
