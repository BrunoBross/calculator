const viewResult = document.querySelector('#result')

let operation = ''
let number = ''

function clicked(buttonClicked=String){
  
  // FAZER A SOMA FINAL
  if(buttonClicked == '='){
    operation += number
    number = ''
    operation = eval(operation)
    viewResult.innerHTML = operation
    number = operation
  // INVERTER SINAL
  }else if(buttonClicked  == '+-'){
    operation *= -1
    viewResult.innerHTML = operation
  // ZERAR CALCULADORA
  }else if(buttonClicked == 'C'){
    operation = '0'
    number = ''
    viewResult.innerHTML = operation
    operation = ''
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    operation = number + buttonClicked
    number = ''
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    number += buttonClicked
    viewResult.innerHTML = number
  }
}