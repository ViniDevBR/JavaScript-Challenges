const metros = Number(prompt('Qual o valor de metros que você deseja converter?'))
const medida = prompt(`Em qual unidade você deseja converter?
      
      a) mm (Milimetros)
      b) cm (Centimetro)
      c) dm (Decimetro)
      d) dam (Decametro)
      e) hm (hectometro)
      f) km (kilometro)`)

switch (medida) {
  case 'a':
    alert(`O valor em milimetros é: ${metros * 1000}mm`)
      break
  case 'b':
    alert(`O valor em centimetros é: ${metros * 100}cm`)
      break
  case 'c':
    alert(`O valor em decimetros é: ${metros * 10}dm`)
      break
  case 'd':
    alert(`O valor em decametros é: ${metros / 10}dam`)
      break
  case 'e':
    alert(`O valor em hectometro é: ${metros / 100}hm`)
      break
  case 'f':
    alert(`O valor em kilometros é: ${metros / 1000}km`)
      break
  default:
    console.log('Medida invalida')
}
