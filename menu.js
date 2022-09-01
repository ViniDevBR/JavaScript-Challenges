let menu  
  do {
    menu = String(prompt(
      `MENU SIMBÓLICO:
      1. XXX
      2. XXX
      3. XXX
      4. XXX
      5. ENCERRAR
      
      DIGITE O NUMERO DE SUA OPÇÃO DESEJADA`))

      switch(menu){
        case '1':
            alert(`Opção 1`) 
              break
        case '2':
            alert(`Opção 2`) 
              break
        case '3':
            alert(`Opção 3`) 
              break
        case '4':
            alert(`Opção 4`) 
              break
        case '5':
            alert(`Encerrando Programa`) 
              break
        default:
          alert('Opção invalida')
      }
  } while (menu !== '5')
