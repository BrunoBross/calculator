const viewResult = document.querySelector('#result')

let operation = ''
let number = ''

function clicked(buttonClicked=String){
  
  // FAZER A SOMA FINAL
  if(buttonClicked == '='){
    operation = eval(operation)
    viewResult.innerHTML = operation
  // INVERTER SINAL
  }else if(buttonClicked  == '+-'){
    operation *= -1
    viewResult.innerHTML = operation
  // ZERAR CALCULADORA
  }else if(buttonClicked == 'C'){
    operation = '0'
    viewResult.innerHTML = operation
    operation = ''
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    number += buttonClicked
    viewResult.innerHTML = number
  }
}