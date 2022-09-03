// WITH NODE.JS
let word = ''
let reverseWord = ''

process.stdout.write('Qual palavra voce deseja verificar?' + '\n')
process.stdin.on('data', data => {
  word += data.toString().trim()
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
  }
  const result =
    word === reverseWord
      ? 'Esta palavra é um palindromo'
      : 'Esta palavra não é um palindromo'
  console.log(result)
  process.exit()
})

//WITH BROWSER
const word = prompt("Informe uma palavra:")
let reverseWord = ""

for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i]
}

const result =
    word === reverseWord
      ? alert('Esta palavra é um palindromo')
      : alert('Esta palavra não é um palindromo')
