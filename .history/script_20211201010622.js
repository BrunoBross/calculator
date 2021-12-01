const viewResult = document.querySelector('#result')

let operation = String

function clicked(buttonClicked=String){
  
  if(buttonClicked == '='){
    viewResult.innerHTML = eval(operation)
  }else if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    viewResult.innerHTML = operation
  }
}