let temperatura = 36
let temperaturaHIGH = temperatura >= 38
let temperaturaMEDIUM = temperatura >= 37.5 && temperatura < 38
if(temperaturaHIGH){
    console.log("Febre Alta")
} else if(temperaturaMEDIUM){
    console.log('Febre Comum')
} else {
    console.log('SAUDAVEL')
}
