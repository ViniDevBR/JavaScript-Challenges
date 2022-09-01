function myName(name = ''){
    if (name === ''){
        throw 'Nome obrigatorio'
    }
    console.log(name)
}
try{
    myName('')
} catch(error){
    console.log(error)
}
