const viewResult = document.querySelector('#result')

let operation = ''

function clicked(buttonClicked=String){
  
  if(buttonClicked == '='){
    viewResult.innerHTML = eval(operation)
  }else if(buttonClicked == 'C'){
    operation = '0'
    viewResult.innerHTML = operation
    operation = ''
  }else if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    viewResult.innerHTML = operation
  }
}