const viewResult = document.querySelector('#result')

let operation = ''

function clicked(buttonClicked=String){
  
  if(buttonClicked == '='){
    viewResult.innerHTML = operation
  }
  if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    viewResult.innerHTML = operation
  }
}