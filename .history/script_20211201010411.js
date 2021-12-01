const viewResult = document.querySelector('#result')

let operation = ''

function clicked(buttonClicked=String){
  
  if(buttonClicked == '='){
    console.log(eval(operation))
  }
  if(9 >= buttonClicked >= 0){
    operation += buttonClicked
    console.log(operation)
  }
}