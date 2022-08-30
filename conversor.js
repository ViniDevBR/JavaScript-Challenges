function conversion(value, medida) {
  let result
  switch (medida) {
    case 'mm':
      result = value * 1000
      break
    case 'cm':
      result = value * 100
      break
    case 'dm':
      result = value * 10
      break
    case 'dam':
      result = value / 10
      break
    case 'hm':
      result = value / 100
      break
    case 'km':
      result = value / 1000
      break
    default:
      console.log('Medida invalida')
  }
  return result
}
console.log(conversion(10,'cm'))
