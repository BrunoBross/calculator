const viewResult = document.querySelector('#result')
const viewHistory = document.querySelector('#history')

let operation = ''
let number = ''
let history = ''
let condition = false

function makeOperation(){
  operation += number
  operation = eval(operation) // REALIZAR A OPERACAO
  viewResult.innerHTML = operation
  number = operation  // TRANSFORMAR O NUMERO NO RESULTADO DA OPERACAO
    
  viewHistory.innerHTML = operation + '=' + eval(history) // MOSTRA O HISTORY
  history = ''
}

function clicked(buttonClicked=String){
  // FAZER A SOMA FINAL
  if(buttonClicked == '='){
    makeOperation()
    usedOperator = false
  // INVERTER SINAL
  }else if(buttonClicked  == '+-'){
    number *= -1
    viewResult.innerHTML = number
  // ZERAR CALCULADORA
  }else if(buttonClicked == 'C'){
    operation = '0'
    number = '0' 
    history = ''
    viewResult.innerHTML = operation
    viewHistory.innerHTML = operation
    operation = '' // ZERAR OPERACAO
    number = ''   // ZERAR NUMERO
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    
    usedOperator = true
    operation = number + buttonClicked
    number = ''
    history += buttonClicked
    viewHistory.innerHTML = history
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    number += buttonClicked
    viewResult.innerHTML = number
    history += buttonClicked
    viewHistory.innerHTML = history
  }
}