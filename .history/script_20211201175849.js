const viewResult = document.querySelector('#result')
const viewHistory = document.querySelector('#history')

let operation = ''
let history = ''
let jahAdicionou = false

function clicked(buttonClicked=String){
  
  // FAZER A SOMA FINAL
  if(buttonClicked == '='){
    jahAdicionou = false
    operation = eval(operation)
    console.log(operation)
    viewResult.innerHTML = operation
  // INVERTER SINAL
  }else if(buttonClicked  == '+-'){
    jahAdicionou = false
    operation *= -1
    viewResult.innerHTML = operation
  // ZERAR CALCULADORA
  }else if(buttonClicked == 'C'){
    jahAdicionou = false
    operation = '0'
    viewResult.innerHTML = operation
    operation = ''
  // PEGAR O OPERADOR
  }else if(buttonClicked == '+' || buttonClicked == '-' || buttonClicked == '*' || buttonClicked == '/'){
    jahAdicionou = true
    if(!jahAdicionou){
      operation += buttonClicked
      viewResult.innerHTML = operation
    }
  // PEGAR O NUMERO DIGITADO
  }else if(9 >= buttonClicked >= 0){
    jahAdicionou = false
    operation += buttonClicked
    viewResult.innerHTML = operation
  }
}