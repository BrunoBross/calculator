const viewResult = document.querySelector('#result')
const viewHistory = document.querySelector('#history')

let operation = ''
let number = ''
let history = ''
let usedOperator = false

function makeOperation(){
  operation += number
  operation = eval(operation) // REALIZAR A OPERACAO
  viewResult.innerHTML = operation
  number = operation  // TRANSFORMAR O NUMERO NO RESULTADO DA OPERACAO
    
  viewHistory.innerHTML = history // MOSTRA O HISTORY
  history = operation  // RESETA O HISTORY
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
    number = '' // ZERAR NUMERO
    viewResult.innerHTML = operation
    operation = '' // ZERAR OPERACAO
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    usedOperator = true
    if(usedOperator = true){
      makeOperation()
    }
    operation = number + buttonClicked
    number = ''
    history += buttonClicked
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    number += buttonClicked
    viewResult.innerHTML = number
    history += buttonClicked
  }
}