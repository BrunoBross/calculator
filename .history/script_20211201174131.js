const viewResult = document.querySelector('#result')
const viewHistory = document.querySelector('#history')

let operation = ''
let history = ''

function clicked(buttonClicked=String){
  
  // FAZER A SOMA FINAL
  if(buttonClicked == '='){
    operation = eval(operation)
    viewResult.innerHTML = operation
  // INVERTER SINAL
  }else if(buttonClicked  == '+-'){
    
  // ZERAR CALCULADORA
  }else if(buttonClicked == 'C'){
    
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    if(operation.endsWith('+') || operation.endsWith('-') || operation.endsWith('*') || operation.endsWith('/')){
      viewResult.innerHTML = operation
    }else{
      operation += buttonClicked
      viewResult.innerHTML = operation
    }
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    viewResult.innerHTML = operation
  }
}