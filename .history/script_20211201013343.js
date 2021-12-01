const viewResult = document.querySelector('#result')
const viewHistory = document.querySelector('#history')

let operation = ''
let number = ''
let history = ''

function clicked(buttonClicked=String){
  
  // FAZER A SOMA FINAL
  if(buttonClicked == '='){
    operation += number
    operation = eval(operation) // REALIZAR A OPERACAO
    viewResult.innerHTML = operation
    number = operation  // TRANSFORMAR O NUMERO NO RESULTADO DA OPERACAO
  // INVERTER SINAL
  }else if(buttonClicked  == '+-'){
    number *= -1
    viewResult.innerHTML = number
  // ZERAR CALCULADORA
  }else if(buttonClicked == 'C'){
    operation = '0'
    number = '' // ZERAR NUMERO
    viewResult.innerHTML = operation
    operation = '' // ZERAR OPERACAO
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    operation = number + buttonClicked
    number = ''
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    number += buttonClicked
    viewResult.innerHTML = number
    history += number
    viewHistory.innerHTML = history
  }
}