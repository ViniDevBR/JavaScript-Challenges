function calculate(n1, operador, n2){
    let result
    switch(operador){
        case '+': 
            result = n1+n2
                break
        case '-': 
            result = n1-n2
                break
        case '*': 
            result = n1*n2
                break
        case '/':
            result = n1/n2 
                break
        default: 
            console.log('Não tem')
            break       
    }
    return result
}
console.log(calculate(4, '+', 10))
